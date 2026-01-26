<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import InfoBox from '@/components/ui/InfoBox.vue'
import TechnicalNote from '@/components/ui/TechnicalNote.vue'
import DataTable from '@/components/ui/DataTable.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'

const l1Networks = [
  { icon: '🟠', title: 'Bitcoin', description: 'La original. Diseñada como "oro digital".' },
  { icon: '💎', title: 'Ethereum', description: 'La plataforma para smart contracts y dApps.' },
  { icon: '🟣', title: 'Solana, Avalanche, etc.', description: 'Alternativas mas rapidas con diferentes trade-offs.' },
]

const costColumns = [
  { key: 'network', header: 'Red' },
  { key: 'type', header: 'Tipo' },
  { key: 'cost', header: 'Costo por TX' },
]

const costRows = [
  { network: 'Ethereum', type: 'L1', cost: '$1 - $50+' },
  { network: 'Arbitrum', type: 'L2', cost: '$0.01 - $0.50' },
  { network: 'Polygon', type: 'Sidechain', cost: '$0.001 - $0.01' },
]
</script>

<template>
  <section id="networks">
    <h2>🌐 Redes: Layer 1 y Layer 2</h2>

    <h3>¿Que es Layer 1?</h3>
    <p>
      La <span class="highlight">blockchain base</span>. Es la red principal que procesa y guarda
      todas las transacciones.
    </p>

    <CardGrid>
      <BaseCard
        v-for="network in l1Networks"
        :key="network.title"
        :icon="network.icon"
        :title="network.title"
      >
        <p>{{ network.description }}</p>
      </BaseCard>
    </CardGrid>

    <h3>El problema de escalabilidad</h3>
    <p>
      Ethereum solo puede procesar ~15 transacciones por segundo. Cuando hay mucha demanda, las
      tarifas suben mucho.
    </p>

    <h3>¿Que es Layer 2?</h3>
    <p>
      Soluciones <span class="highlight-purple">construidas sobre L1</span> para procesar
      transacciones mas rapido y barato, pero heredando la seguridad de la capa base.
    </p>

    <InfoBox title="💡 Analogia:">
      <p>
        Si L1 es la autopista principal (segura pero congestionada), L2 son carriles express que
        descargan trafico y luego consolidan en la autopista.
      </p>
    </InfoBox>

    <CardGrid>
      <BaseCard title="Rollups Optimistas">
        <p><BaseBadge variant="orange">Arbitrum, Optimism, Base</BaseBadge></p>
        <p>Asumen que todo es valido. Hay tiempo para disputar si algo esta mal.</p>
      </BaseCard>
      <BaseCard title="ZK-Rollups">
        <p><BaseBadge variant="purple">zkSync, StarkNet</BaseBadge></p>
        <p>Usan pruebas matematicas para validar lotes de transacciones.</p>
      </BaseCard>
    </CardGrid>

    <TechnicalNote note-title="Costos tipicos">
      <DataTable :columns="costColumns" :rows="costRows" />
    </TechnicalNote>
  </section>
</template>

<style scoped>
section {
  min-height: 100vh;
  padding: var(--spacing-xl) var(--spacing-xl);
  max-width: 1400px;
  margin: 0 auto;
}
</style>
