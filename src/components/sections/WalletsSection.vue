<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import InfoBox from '@/components/ui/InfoBox.vue'
import WarningBox from '@/components/ui/WarningBox.vue'
</script>

<template>
  <section id="wallets">
    <h2>👛 Wallets: Tu puerta de entrada</h2>

    <h3>¿Que es una wallet?</h3>
    <p>
      Una <span class="highlight">wallet</span> es una aplicacion para guardar tus claves y firmar
      transacciones.
    </p>

    <InfoBox title="🎯 Quedate con esta idea:">
      <p>
        La wallet <span class="highlight">NO guarda tus criptos</span>. Tus criptos viven en
        blockchain (on-chain). La wallet solo guarda las llaves para acceder a ellas.
      </p>
    </InfoBox>

    <WarningBox title="⚠️ &quot;Not your keys, not your coins&quot;">
      <p>
        Si no controlas tu clave privada (como en exchanges tipo Binance), tecnicamente no eres
        dueño de tus criptos.
      </p>
    </WarningBox>

    <h3>Tipos de wallets</h3>
    <CardGrid>
      <BaseCard icon="🔥" title="Hot Wallets">
        <p>Conectadas a internet. Convenientes para uso diario.</p>
        <ul>
          <li><strong>Browser:</strong> MetaMask, Rabby</li>
          <li><strong>Mobile:</strong> Trust Wallet, Rainbow</li>
        </ul>
      </BaseCard>
      <BaseCard icon="❄️" title="Cold Wallets">
        <p>Sin conexion a internet. Para guardar grandes cantidades.</p>
        <ul>
          <li><strong>Hardware:</strong> Ledger, Trezor</li>
        </ul>
      </BaseCard>
    </CardGrid>

    <h3>Seed Phrase: Tu respaldo</h3>
    <p>
      12 o 24 palabras que representan tu clave privada. Con estas palabras puedes recuperar tu
      wallet en cualquier dispositivo.
    </p>

    <WarningBox title="🚨 REGLAS DE ORO:">
      <ul>
        <li>NUNCA compartas tu seed phrase con nadie</li>
        <li>Ningun soporte legitimo te la pedira</li>
        <li>Escribela en papel, no en tu computadora</li>
        <li>Guardala en un lugar seguro</li>
      </ul>
    </WarningBox>

    <h3>MetaMask: La wallet mas usada</h3>
    <p>
      <span class="highlight">MetaMask</span> es la extension de navegador que usaras para
      conectarte a dApps. Instalala desde <span class="highlight">metamask.io</span>
    </p>

    <InfoBox title="💡 Para practicar:">
      <p>
        Instala MetaMask, crea una wallet, y conectate a la testnet Sepolia para hacer pruebas sin
        gastar dinero real.
      </p>
    </InfoBox>
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
