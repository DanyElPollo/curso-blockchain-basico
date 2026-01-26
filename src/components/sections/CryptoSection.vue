<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import InfoBox from '@/components/ui/InfoBox.vue'
import WarningBox from '@/components/ui/WarningBox.vue'
import TechnicalNote from '@/components/ui/TechnicalNote.vue'
import FlowDiagram from '@/components/ui/FlowDiagram.vue'
import type { FlowItem } from '@/types/course'

const keyFlow: FlowItem[] = [
  { title: '🔑 Clave Privada', subtitle: 'Tu contraseña secreta', highlight: 'NUNCA compartir' },
  { title: '🔓 Clave Publica', subtitle: 'Se deriva de la privada' },
  { title: '📍 Direccion', subtitle: 'Como tu "numero de cuenta"' },
]
</script>

<template>
  <section id="crypto">
    <h2>🔐 Criptografia: Lo esencial</h2>

    <p>
      No necesitas ser experto en criptografia para usar blockchain. Solo entiende estas dos ideas:
    </p>

    <h3>1. Funciones Hash: La huella digital</h3>
    <p>
      Un <span class="highlight">hash</span> toma cualquier dato y genera un codigo unico de tamaño
      fijo. Es como una huella digital.
    </p>

    <CardGrid>
      <BaseCard title="Propiedades importantes">
        <ul>
          <li><strong>Determinista:</strong> Mismo input = mismo output, siempre</li>
          <li><strong>Unidireccional:</strong> No puedes "revertirlo"</li>
          <li><strong>Sensible:</strong> Un cambio minimo = hash totalmente diferente</li>
        </ul>
      </BaseCard>
      <BaseCard title="¿Para que se usa?">
        <ul>
          <li>Conectar bloques entre si</li>
          <li>Identificar transacciones</li>
          <li>Generar direcciones de wallet</li>
        </ul>
      </BaseCard>
    </CardGrid>

    <InfoBox title="💡 Ejemplo:">
      <p>
        "Hola" → <code>0x3d5f1c...</code><br />
        "hola" → <code>0x8a7b2e...</code><br />
        Un solo caracter cambia todo el hash.
      </p>
    </InfoBox>

    <WarningBox title="📌 No necesitas memorizar esto ahora:">
      <p>Solo recuerda que el hash es como una huella digital unica e irreversible.</p>
    </WarningBox>

    <h3>2. Claves Publica y Privada: Tu identidad</h3>
    <p>En blockchain, tu identidad es un par de claves matematicamente relacionadas:</p>

    <FlowDiagram :items="keyFlow" />

    <InfoBox title="🎯 Quedate con esta idea:">
      <p>
        La clave privada es como la llave de tu casa. La direccion es como tu direccion postal - la
        puedes dar para que te envien cosas, pero no das tu llave.
      </p>
    </InfoBox>

    <TechnicalNote>
      <p>
        Blockchain usa criptografia de curva eliptica (ECDSA). Ethereum usa la curva secp256k1. Las
        direcciones son los ultimos 20 bytes del hash Keccak-256 de la clave publica.
      </p>
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
