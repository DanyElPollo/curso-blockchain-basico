<script setup lang="ts">
import { useWeb3 } from '@/composables/useWeb3'

const { walletState, shortAddress, hasEthereum, connect, disconnect } = useWeb3()
</script>

<template>
  <div class="wallet-connect">
    <template v-if="!hasEthereum">
      <a
        href="https://metamask.io"
        target="_blank"
        rel="noopener noreferrer"
        class="wallet-btn install"
      >
        Instalar MetaMask
      </a>
    </template>
    <template v-else-if="walletState.isConnected">
      <div class="wallet-info">
        <span class="wallet-address">{{ shortAddress }}</span>
        <button class="wallet-btn disconnect" @click="disconnect">Desconectar</button>
      </div>
    </template>
    <template v-else>
      <button
        class="wallet-btn connect"
        :disabled="walletState.isConnecting"
        @click="connect"
      >
        {{ walletState.isConnecting ? 'Conectando...' : 'Conectar Wallet' }}
      </button>
    </template>
    <p v-if="walletState.error" class="wallet-error">{{ walletState.error }}</p>
  </div>
</template>

<style scoped>
.wallet-connect {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
}

.wallet-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.wallet-address {
  background: var(--bg-card);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: var(--accent);
  border: 1px solid var(--border);
}

.wallet-btn {
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  border: none;
  text-decoration: none;
}

.wallet-btn.connect {
  background: var(--gradient-1);
  color: var(--bg-primary);
}

.wallet-btn.connect:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
}

.wallet-btn.connect:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.wallet-btn.disconnect {
  background: transparent;
  color: var(--accent-orange);
  border: 1px solid var(--accent-orange);
}

.wallet-btn.disconnect:hover {
  background: var(--accent-orange);
  color: var(--bg-primary);
}

.wallet-btn.install {
  background: var(--accent-secondary);
  color: white;
}

.wallet-btn.install:hover {
  background: var(--accent-pink);
}

.wallet-error {
  color: var(--accent-orange);
  font-size: 0.85rem;
  margin: 0;
}
</style>
