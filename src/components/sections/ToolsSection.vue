<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import InfoBox from '@/components/ui/InfoBox.vue'
import CodeBlock from '@/components/ui/CodeBlock.vue'
import DataTable from '@/components/ui/DataTable.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'

const projectStructure = `mi-proyecto/
├── contracts/          # Smart contracts (.sol)
│   └── MiContrato.sol
├── scripts/            # Scripts de deploy
│   └── deploy.js
├── test/               # Tests
│   └── MiContrato.test.js
├── hardhat.config.js   # Configuracion
└── package.json`

const commandColumns = [
  { key: 'action', header: 'Accion' },
  { key: 'command', header: 'Comando' },
]

const commandRows = [
  { action: 'Compilar contratos', command: '<code>npx hardhat compile</code>' },
  { action: 'Correr tests', command: '<code>npx hardhat test</code>' },
  { action: 'Levantar red local', command: '<code>npx hardhat node</code>' },
  { action: 'Desplegar a testnet', command: '<code>npx hardhat run scripts/deploy.js --network sepolia</code>' },
]
</script>

<template>
  <section id="tools">
    <h2>🛠️ Herramientas de desarrollo</h2>

    <InfoBox title="📌 Para empezar solo necesitas:">
      <p>
        Remix (en el navegador) para prototipar, y eventualmente Hardhat para proyectos mas serios.
      </p>
    </InfoBox>

    <h3>Tu stack de desarrollo</h3>
    <CardGrid>
      <BaseCard icon="🎹" title="Remix IDE">
        <p><BaseBadge variant="green">Empieza aqui</BaseBadge></p>
        <p>IDE online perfecto para aprender. No requiere instalacion.</p>
        <p style="margin-top: 1rem"><span class="highlight">remix.ethereum.org</span></p>
      </BaseCard>
      <BaseCard icon="⚒️" title="Hardhat" link="https://hardhat.org/">
        <p><BaseBadge variant="purple">Para proyectos reales</BaseBadge></p>
        <p>Framework profesional. Compilar, testear y desplegar.</p>
        <CodeBlock
          code="npm install --save-dev hardhat
npx hardhat init"
        />
      </BaseCard>
    </CardGrid>

    <h3>Estructura de un proyecto</h3>
    <CodeBlock :code="projectStructure" language="Estructura" />

    <h3>Comandos esenciales</h3>
    <DataTable :columns="commandColumns" :rows="commandRows" />

    <h3>Otras herramientas importantes</h3>
    <CardGrid>
      <BaseCard title="📚 OpenZeppelin">
        <p>Contratos seguros y auditados listos para usar.</p>
        <CodeBlock code="npm install @openzeppelin/contracts" />
      </BaseCard>
      <BaseCard title="🔍 Etherscan">
        <p>Explorador de blockchain. Ver transacciones, verificar contratos.</p>
        <a class="link" href="https://metisscan.info/" target="_blank" rel="noopener noreferrer">Explorer Mainnet</a>
        <a class="link" href="https://sepolia-explorer.metisdevops.link/" target="_blank" rel="noopener noreferrer">Explorer Testnet</a>
      </BaseCard>
      <BaseCard title="🌐 Infura / Alchemy">
        <p>Nodos como servicio. Conectarte a Ethereum sin correr tu propio nodo.</p>
      </BaseCard>
    </CardGrid>
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
