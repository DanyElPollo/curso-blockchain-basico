<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import InfoBox from '@/components/ui/InfoBox.vue'
import DataTable from '@/components/ui/DataTable.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'

const docsLeft = [
  '<strong>Solidity:</strong> docs.soliditylang.org',
  '<strong>Ethereum:</strong> ethereum.org/developers',
  '<strong>Hardhat:</strong> hardhat.org/docs',
]

const docsRight = [
  '<strong>OpenZeppelin:</strong> docs.openzeppelin.com',
  '<strong>Web3.js:</strong> docs.web3js.org/',
  '<strong>Wagmi:</strong> wagmi.sh',
]

const testnetColumns = [
  { key: 'testnet', header: 'Testnet' },
  { key: 'network', header: 'Red' },
  { key: 'faucet', header: 'Faucet' },
]

const testnetRows = [
  { testnet: 'Sepolia', network: 'Ethereum', faucet: 'sepoliafaucet.com' },
  { testnet: 'Mumbai', network: 'Polygon', faucet: 'faucet.polygon.technology' },
]
</script>

<template>
  <section id="resources">
    <h2>📚 ¿Por donde seguir?</h2>

    <InfoBox title="🎯 Tu siguiente paso:">
      <p>
        Abre <a href="https://cryptozombies.io/es/" target="_blank"><span class="highlight">CryptoZombies</span></a> y completa las primeras lecciones. Es la
        mejor forma de consolidar lo aprendido hoy.
      </p>
    </InfoBox>

    <h3>Cursos interactivos (gratuitos)</h3>
    <CardGrid>
      <BaseCard icon="🧟" title="CryptoZombies" border-color="var(--accent-green)" link="https://cryptozombies.io/es/">
        <p><BaseBadge variant="green">Empieza aqui</BaseBadge></p>
        <p><span class="highlight">cryptozombies.io</span></p>
        <p>Aprende Solidity creando un juego.</p>
      </BaseCard>
      <BaseCard icon="🏃" title="Speedrun Ethereum">
        <p><span class="highlight">speedrunethereum.com</span></p>
        <p>Challenges para construir dApps.</p>
      </BaseCard>
      <BaseCard icon="🔐" title="Ethernaut">
        <p><span class="highlight">ethernaut.openzeppelin.com</span></p>
        <p>Practica seguridad hackeando contratos.</p>
      </BaseCard>
    </CardGrid>

    <h3>Documentacion oficial</h3>
    <div class="two-columns">
      <div>
        <FeatureList :items="docsLeft" />
      </div>
      <div>
        <FeatureList :items="docsRight" />
      </div>
    </div>

    <h3>Testnets para practicar</h3>
    <p>Practica sin gastar dinero real:</p>
    <DataTable :columns="testnetColumns" :rows="testnetRows" />

    <div class="section-divider"></div>

    <h3 style="text-align: center">🎉 ¡Gracias por participar!</h3>
    <p style="text-align: center; font-size: 1.25rem">
      Ahora tienes las bases para explorar Web3.
    </p>
    <p style="text-align: center">
      Recuerda: lo mas importante es <strong>practicar</strong>. Abre Remix, crea un contrato,
      despliega en testnet.
    </p>
  </section>
</template>

<style scoped>
section {
  min-height: 100vh;
  padding: var(--spacing-xl) var(--spacing-xl);
  max-width: 1400px;
  margin: 0 auto;
}

.two-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.section-divider {
  height: 2px;
  background: var(--gradient-1);
  margin: var(--spacing-2xl) 0;
  border-radius: 2px;
}

a {
    text-decoration: none; 
    display: inline-block; 
    transition: transform 0.3s ease; 
}

a:hover{
    transform: scale(1.1);
    padding: 0 8px;
}
</style>
