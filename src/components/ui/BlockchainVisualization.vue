<script setup lang="ts">
import type { BlockData } from '@/types/course'

defineProps<{
    blocks: BlockData[]
}>()
</script>

<template>
    <div class="blockchain-viz">
        <div v-for="(block, index) in blocks" :key="index" class="block">
            <div class="block-header">{{ block.header }}</div>
            <div class="block-data">
                <span><strong>Transacciones:</strong> {{ block.transactions }}</span>
                <span><strong>{{ block.prevHash ? 'Apunta a:' : 'Hash:' }}</strong></span>
                <span class="block-hash">{{ block.prevHash || block.hash }}</span>
            </div>
        </div>
    </div>

    <div class="blockchain-demo">
        <a href="https://demoblockchain.org/blockchain" target="_blank" class="link">Ir al demo</a>
    </div>
</template>

<style scoped>
.blockchain-viz {
    display: flex;
    gap: var(--spacing-md);
    overflow-x: auto;
    padding: var(--spacing-md) 0;
    margin: var(--spacing-md) 0;
}

.block {
    min-width: 300px;
    background: var(--bg-card);
    border: 2px solid var(--accent);
    border-radius: var(--radius-lg);
    padding: var(--spacing-md);
    position: relative;
}

.block::after {
    content: '→';
    position: absolute;
    right: -1.2rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--accent);
    font-size: 1.5rem;
}

.block:last-child::after {
    display: none;
}

.block-header {
    background: var(--accent);
    color: var(--bg-primary);
    padding: var(--spacing-sm);
    border-radius: 6px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.block-data {
    font-size: 0.8rem;
    color: var(--text-secondary);
}

.block-data span {
    display: block;
    margin: var(--spacing-xs) 0;
}

.block-hash {
    font-family: monospace;
    font-size: 0.7rem;
    color: var(--accent-green);
    word-break: break-all;
}

.blockchain-demo{
    display: flex;
    width: 100%;
    justify-content: end;
}
</style>
