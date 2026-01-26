import { ref, computed, onMounted } from 'vue'

// Types for Web3 integration
export interface WalletState {
  address: string | null
  chainId: number | null
  isConnected: boolean
  isConnecting: boolean
  error: string | null
}

// Declare ethereum on window
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
      on: (event: string, callback: (arg: unknown) => void) => void
      removeListener: (event: string, callback: (arg: unknown) => void) => void
    }
  }
}

// Reactive state
const walletState = ref<WalletState>({
  address: null,
  chainId: null,
  isConnected: false,
  isConnecting: false,
  error: null,
})

// Check if window.ethereum is available
const hasEthereum = computed(() => {
  return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'
})

export function useWeb3() {
  // Formatted address (0x1234...5678)
  const shortAddress = computed(() => {
    if (!walletState.value.address) return null
    const addr = walletState.value.address
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  })

  // Connect wallet
  const connect = async () => {
    if (!hasEthereum.value || !window.ethereum) {
      walletState.value.error = 'MetaMask no esta instalado'
      return
    }

    try {
      walletState.value.isConnecting = true
      walletState.value.error = null

      const accounts = (await window.ethereum.request({
        method: 'eth_requestAccounts',
      })) as string[]

      if (accounts.length > 0) {
        walletState.value.address = accounts[0] ?? null
        walletState.value.isConnected = true

        const chainId = (await window.ethereum.request({
          method: 'eth_chainId',
        })) as string
        walletState.value.chainId = parseInt(chainId, 16)
      }
    } catch (err: unknown) {
      const error = err as Error
      walletState.value.error = error.message || 'Error al conectar'
    } finally {
      walletState.value.isConnecting = false
    }
  }

  // Disconnect wallet (reset state)
  const disconnect = () => {
    walletState.value.address = null
    walletState.value.chainId = null
    walletState.value.isConnected = false
    walletState.value.error = null
  }

  // Switch network
  const switchNetwork = async (chainId: number) => {
    if (!hasEthereum.value || !window.ethereum) return

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      })
    } catch (err: unknown) {
      const error = err as Error
      walletState.value.error = error.message || 'Error al cambiar de red'
    }
  }

  // Setup event listeners
  const setupListeners = () => {
    if (!hasEthereum.value || !window.ethereum) return

    window.ethereum.on('accountsChanged', (arg: unknown) => {
      const accounts = arg as string[]
      if (accounts.length === 0) {
        disconnect()
      } else {
        walletState.value.address = accounts[0] ?? null
      }
    })

    window.ethereum.on('chainChanged', (arg: unknown) => {
      const chainId = arg as string
      walletState.value.chainId = parseInt(chainId, 16)
    })
  }

  // Check if already connected
  const checkConnection = async () => {
    if (!hasEthereum.value || !window.ethereum) return

    try {
      const accounts = (await window.ethereum.request({
        method: 'eth_accounts',
      })) as string[]

      if (accounts.length > 0) {
        walletState.value.address = accounts[0] ?? null
        walletState.value.isConnected = true

        const chainId = (await window.ethereum.request({
          method: 'eth_chainId',
        })) as string
        walletState.value.chainId = parseInt(chainId, 16)
      }
    } catch {
      // Silent fail - user might not be connected
    }
  }

  onMounted(() => {
    setupListeners()
    checkConnection()
  })

  return {
    // State
    walletState,
    hasEthereum,
    shortAddress,

    // Actions
    connect,
    disconnect,
    switchNetwork,
  }
}

// Network configurations for reference
export const NETWORKS = {
  ETHEREUM_MAINNET: {
    chainId: 1,
    name: 'Ethereum Mainnet',
    currency: 'ETH',
    rpcUrl: 'https://mainnet.infura.io/v3/',
    explorer: 'https://etherscan.io',
  },
  SEPOLIA: {
    chainId: 11155111,
    name: 'Sepolia Testnet',
    currency: 'ETH',
    rpcUrl: 'https://sepolia.infura.io/v3/',
    explorer: 'https://sepolia.etherscan.io',
  },
  POLYGON: {
    chainId: 137,
    name: 'Polygon',
    currency: 'MATIC',
    rpcUrl: 'https://polygon-rpc.com',
    explorer: 'https://polygonscan.com',
  },
  ARBITRUM: {
    chainId: 42161,
    name: 'Arbitrum One',
    currency: 'ETH',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    explorer: 'https://arbiscan.io',
  },
} as const
