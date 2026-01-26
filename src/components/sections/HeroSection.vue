<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import FeatureList from '@/components/ui/FeatureList.vue'

const objetivos = [
  'Que vive on-chain y que no',
  'Que es un smart contract y como funciona',
  'Como una web interactua con blockchain',
  'Por donde seguir aprendiendo',
]

const requisitos = [
  'Conocimientos basicos de programacion',
  'Familiaridad con JavaScript (ideal)',
  'Curiosidad y ganas de aprender',
]
</script>

<template>
  <section id="intro" class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <h1>🔗 Blockchain para Developers</h1>
      <p>
        Entiende como funciona blockchain y como construir aplicaciones Web3. Sin rodeos, directo a
        lo que necesitas saber.
      </p>

      <CardGrid>
        <BaseCard icon="🎯" title="Al terminar este curso sabras:">
          <FeatureList :items="objetivos" />
        </BaseCard>
        <BaseCard icon="⚡" title="Lo que necesitas traer:">
          <FeatureList :items="requisitos" />
        </BaseCard>
      </CardGrid>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: var(--spacing-xl);
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
}

.hero p {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
}
</style>
