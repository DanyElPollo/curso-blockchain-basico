<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import InfoBox from '@/components/ui/InfoBox.vue'
import WarningBox from '@/components/ui/WarningBox.vue'
</script>

<template>
  <section id="defi">
    <h2>💰 DeFi: Ejemplo de smart contracts en accion</h2>

    <InfoBox title="📌 Esto es solo para entender el flujo:">
      <p>
        DeFi es un ecosistema complejo. Aqui solo vemos como los smart contracts habilitan servicios
        financieros sin intermediarios.
      </p>
    </InfoBox>

    <h3>La idea central</h3>
    <p>
      DeFi usa <span class="highlight">smart contracts</span> para recrear servicios financieros.
      Todo funciona con codigo: las reglas, los prestamos, los intercambios.
    </p>

    <h3>Tipos de aplicaciones</h3>
    <CardGrid>
      <BaseCard icon="🔄" title="DEX (Exchanges)">
        <p>Intercambiar tokens sin intermediario.</p>
      </BaseCard>
      <BaseCard icon="🏦" title="Lending">
        <p>Prestar/pedir prestado con cripto.</p>
      </BaseCard>
    </CardGrid>

    <WarningBox title="⚠️ Importante:">
      <p>
        DeFi tiene riesgos reales (bugs, hacks, scams). Este curso no cubre DeFi a profundidad -
        solo es un ejemplo de smart contracts aplicados.
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
