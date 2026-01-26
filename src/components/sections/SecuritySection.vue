<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import InfoBox from '@/components/ui/InfoBox.vue'
import WarningBox from '@/components/ui/WarningBox.vue'
import TechnicalNote from '@/components/ui/TechnicalNote.vue'
import FeatureList from '@/components/ui/FeatureList.vue'

const bestPractices = [
  'Usa OpenZeppelin (codigo auditado)',
  'Usa Solidity 0.8+ (proteccion overflow)',
  'Testea antes de desplegar',
]
</script>

<template>
  <section id="security">
    <h2>🔒 Seguridad: Lo esencial</h2>

    <InfoBox title="📌 Para este curso basico:">
      <p>
        Solo necesitas conocer las reglas de oro para proteger tus claves y algunas buenas practicas
        iniciales.
      </p>
    </InfoBox>

    <h3>Reglas de oro para usuarios</h3>
    <WarningBox>
      <ul>
        <li><strong>NUNCA</strong> compartas tu seed phrase con nadie</li>
        <li><strong>NUNCA</strong> la ingreses en sitios web</li>
        <li><strong>Nadie legitimo</strong> te la pedira jamas</li>
        <li>Verifica URLs antes de conectar tu wallet</li>
      </ul>
    </WarningBox>

    <h3>Para desarrolladores</h3>
    <CardGrid>
      <BaseCard title="🛡️ Buenas practicas iniciales">
        <FeatureList :items="bestPractices" />
      </BaseCard>
    </CardGrid>

    <TechnicalNote note-title="Para profundizar despues">
      <ul>
        <li>
          <strong>Ethernaut:</strong> Practica seguridad hackeando contratos vulnerables
        </li>
        <li>
          <strong>Reentrancy:</strong> El bug mas famoso - actualiza estado ANTES de llamadas
          externas
        </li>
      </ul>
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
