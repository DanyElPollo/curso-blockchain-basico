<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import InfoBox from '@/components/ui/InfoBox.vue'
import WarningBox from '@/components/ui/WarningBox.vue'
import BlockchainVisualization from '@/components/ui/BlockchainVisualization.vue'
import type { BlockData } from '@/types/course'

const characteristics = [
  { icon: '🔒', title: 'Inmutable', description: 'Los datos no se pueden cambiar una vez registrados.' },
  { icon: '🌐', title: 'Descentralizada', description: 'No hay un servidor central. Miles de computadoras tienen una copia.' },
  { icon: '👁️', title: 'Transparente', description: 'Cualquiera puede ver todas las transacciones.' },
  { icon: '🤝', title: 'Sin intermediarios', description: 'El protocolo garantiza las reglas, no una empresa.' },
]

const blocks: BlockData[] = [
  { header: 'Bloque 0', transactions: '"Genesis"', hash: '0xabc123...' },
  { header: 'Bloque 1', transactions: 'A→B 5 ETH', hash: '0xdef456...', prevHash: '0xabc123...' },
  { header: 'Bloque 2', transactions: 'B→C 2 ETH', hash: '0xghi789...', prevHash: '0xdef456...' },
]
</script>

<template>
  <section id="fundamentals">
    <h2>📦 ¿Que es Blockchain?</h2>

    <h3>El concepto en una frase</h3>
    <p>
      Una <span class="highlight">blockchain</span> es una base de datos compartida donde todos
      pueden verificar que nadie hizo trampa.
    </p>

    <InfoBox title="🎯 Quedate con esta idea:">
      <p>
        Un libro contable publico donde cada pagina esta sellada. Una vez escrito, no se puede
        borrar sin que todos lo noten.
      </p>
    </InfoBox>

    <h3>¿Para que sirve?</h3>
    <p>
      Permite que personas que <strong>no se conocen ni confian entre si</strong> puedan acordar una
      verdad comun sin necesitar un intermediario (banco, notario, etc.).
    </p>

    <h3>Las 4 caracteristicas clave</h3>
    <CardGrid>
      <BaseCard
        v-for="item in characteristics"
        :key="item.title"
        :icon="item.icon"
        :title="item.title"
      >
        <p>{{ item.description }}</p>
      </BaseCard>
    </CardGrid>

    <h3>¿Como se ve en la practica?</h3>
    <p>
      La blockchain es una cadena de "bloques". Cada bloque contiene transacciones y esta conectado
      al anterior:
    </p>

    <BlockchainVisualization :blocks="blocks" />

    <WarningBox title="⚠️ ¿Que pasa si alguien quiere hacer trampa?">
      <p>
        Si cambias un bloque, su "huella digital" (hash) cambia. Eso rompe la conexion con el
        siguiente bloque. Todos los nodos lo notarian y rechazarian el cambio.
      </p>
    </WarningBox>
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
