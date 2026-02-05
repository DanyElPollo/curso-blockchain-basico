import { ref } from 'vue'
import { Web3, type ProviderRpcError } from 'web3'

const web3 = ref<Web3 | null>(null) // Conexion con la blockchain
const account = ref<string | null>(null)
const isConnecting = ref(false)
const error = ref<string | null>(null)

export function useWeb3() {
    async function connectWallet() {
        try 
        {
            isConnecting.value = true
            error.value = null

            if(!window.ethereum) {
                throw new Error('No se encontró un proveedor de Ethereum. Por favor, instala MetaMask u otra wallet compatible.')
            }

            web3.value = new Web3(window.ethereum)

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

            account.value = accounts[0]
        } 
        catch (err: ProviderRpcError | any) 
        {
            console.error('Error conectando wallet:', err)
            error.value = err.message ?? 'Error desconocido'
        } 
        finally
        {
            isConnecting.value = false
        }
    }

    async function disconnectWallet() {

        try 
        {
            await window.ethereum?.request({ 
                method: 'wallet_revokePermissions', 
                params: [{ eth_accounts: {} }] 
            })
        } 
        catch (error) 
        {
            console.log("error to disconnect", error)
        }

        web3.value = null
        account.value = null
    }

    return {
        web3,
        account,
        isConnecting,
        error,
        connectWallet,
        disconnectWallet
    }
}
