<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import InfoBox from '@/components/ui/InfoBox.vue'
import WarningBox from '@/components/ui/WarningBox.vue'
import TechnicalNote from '@/components/ui/TechnicalNote.vue'
import DataTable from '@/components/ui/DataTable.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'

const tableColumns = [
  { key: 'mechanism', header: 'Mecanismo' },
  { key: 'speed', header: 'Velocidad' },
  { key: 'energy', header: 'Energia' },
  { key: 'example', header: 'Ejemplo' },
]

const tableRows = [
  { mechanism: 'Proof of Work', speed: '~10 min/bloque', energy: '🔴 Muy alta', example: 'Bitcoin' },
  { mechanism: 'Proof of Stake', speed: '~12 seg/bloque', energy: '🟢 Muy baja', example: 'Ethereum' },
]
</script>

<template>
  <section id="consensus">
    <h2>🤝 Consenso: ¿Como se ponen de acuerdo?</h2>

    <p>
      Si no hay un jefe central, ¿como deciden todos cual es la version correcta de la blockchain?
    </p>

    <InfoBox title="🎯 Quedate con esta idea:">
      <p>
        Miles de computadoras que no se conocen deben acordar que transacciones son validas. El
        mecanismo de consenso son las "reglas del juego" que todos siguen.
      </p>
    </InfoBox>

    <WarningBox title="📌 No necesitas memorizar los detalles:">
      <p>
        Solo entiende que existen diferentes formas de lograr este acuerdo, cada una con sus
        trade-offs.
      </p>
    </WarningBox>

    <h3>Los dos mecanismos principales</h3>
    <CardGrid>
      <BaseCard icon="⛏️" title="Proof of Work (PoW)">
        <p><BaseBadge variant="orange">Bitcoin</BaseBadge></p>
        <p>
          Los "mineros" compiten resolviendo puzzles matematicos. El primero en resolver agrega el
          bloque.
        </p>
        <ul>
          <li><span class="highlight-green">+</span> Muy seguro y probado</li>
          <li><span class="highlight-orange">-</span> Consume mucha energia</li>
        </ul>
      </BaseCard>
      <BaseCard icon="🥩" title="Proof of Stake (PoS)">
        <p><BaseBadge variant="purple">Ethereum</BaseBadge></p>
        <p>
          Los validadores "apuestan" sus monedas. Se eligen al azar para crear bloques.
        </p>
        <ul>
          <li><span class="highlight-green">+</span> 99.9% menos energia</li>
          <li><span class="highlight-green">+</span> Mas rapido</li>
        </ul>
      </BaseCard>
    </CardGrid>

    <TechnicalNote note-title="Comparativa rapida">
      <DataTable :columns="tableColumns" :rows="tableRows" />
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
