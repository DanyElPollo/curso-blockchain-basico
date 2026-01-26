<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import InfoBox from '@/components/ui/InfoBox.vue'
import CodeBlock from '@/components/ui/CodeBlock.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'

// Use string concatenation to prevent Vite from scanning this as a real import
const importLine = 'import' + ' "@openzeppelin/contracts/token/ERC20/ERC20.sol";'
const tokenCode = `// Token ERC-20 con OpenZeppelin
${importLine}

contract MiToken is ERC20 {
    constructor() ERC20("MiToken", "MTK") {
        _mint(msg.sender, 1000000 * 10**decimals());
    }
}`
</script>

<template>
  <section id="tokens">
    <h2>🪙 Tokens: Smart contracts con balance</h2>

    <h3>¿Que es un token?</h3>
    <p>
      Un <span class="highlight">token</span> es simplemente un smart contract que lleva registro de
      balances. Vive DENTRO de una blockchain existente.
    </p>

    <InfoBox title="🎯 Quedate con esta idea:">
      <p>
        Un token es un <span class="highlight">smart contract</span> con un mapping de direcciones a
        balances. Nada magico, solo codigo que dice "esta direccion tiene X tokens".
      </p>
    </InfoBox>

    <CardGrid>
      <BaseCard icon="🟡" title="Coin vs Token">
        <p><strong>Coin:</strong> Nativo de blockchain (ETH, BTC)</p>
        <p><strong>Token:</strong> Creado con smart contract (USDT, UNI)</p>
      </BaseCard>
      <BaseCard icon="📋" title="¿Por que estandares (ERC)?">
        <p>Para que todos los tokens funcionen igual en wallets y dApps.</p>
      </BaseCard>
    </CardGrid>

    <h3>Los dos estandares principales</h3>
    <CardGrid>
      <BaseCard title="ERC-20: Fungibles">
        <p><BaseBadge variant="blue">Intercambiables</BaseBadge></p>
        <p>Cada token es igual a otro (como billetes).</p>
        <p><strong>Ejemplos:</strong> USDT, USDC, UNI, LINK</p>
      </BaseCard>
      <BaseCard title="ERC-721: NFTs">
        <p><BaseBadge variant="purple">Unicos</BaseBadge></p>
        <p>Cada token es diferente (como obras de arte).</p>
        <p><strong>Ejemplos:</strong> CryptoPunks, Bored Apes</p>
      </BaseCard>
    </CardGrid>

    <h3>Crear un token es facil</h3>
    <CodeBlock :code="tokenCode" language="ERC-20" />
    <p>Con solo 6 lineas tienes un token funcional. OpenZeppelin hace el trabajo pesado.</p>
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
