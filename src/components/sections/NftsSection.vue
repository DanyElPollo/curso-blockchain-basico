<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import InfoBox from '@/components/ui/InfoBox.vue'
import WarningBox from '@/components/ui/WarningBox.vue'
import TechnicalNote from '@/components/ui/TechnicalNote.vue'
</script>

<template>
  <section id="nfts">
    <h2>🎨 NFTs: Ejemplo practico de on-chain vs off-chain</h2>

    <InfoBox title="🎯 ¿Por que vemos NFTs aqui?">
      <p>
        No para aprender a crear colecciones de arte, sino porque los NFTs ilustran perfectamente la
        separacion <span class="highlight">on-chain</span> vs
        <span class="highlight-purple">off-chain</span>.
      </p>
    </InfoBox>

    <h3>El concepto clave</h3>
    <p>
      Un NFT es un <span class="highlight">smart contract con una estructura particular</span>, no
      un archivo.
    </p>

    <CardGrid>
      <BaseCard border-color="var(--accent)" title="🔗 On-chain (en blockchain)">
        <ul>
          <li><code>tokenId</code> - Identificador unico</li>
          <li><code>owner</code> - Quien es el dueño</li>
          <li><code>tokenURI</code> - Link a los metadatos</li>
        </ul>
        <p><small>Esto es inmutable y verificable</small></p>
      </BaseCard>
      <BaseCard border-color="var(--accent-secondary)" title="🌐 Off-chain (fuera de blockchain)">
        <ul>
          <li>Imagen o video</li>
          <li>Metadatos (nombre, descripcion)</li>
          <li>Atributos y propiedades</li>
        </ul>
        <p><small>Guardado en IPFS o servidores</small></p>
      </BaseCard>
    </CardGrid>

    <WarningBox title="🎯 Quedate con esta idea:">
      <p>
        <strong>Un NFT NO es la imagen.</strong> El NFT es un registro de propiedad on-chain que
        <em>apunta</em> a un archivo off-chain. Guardar imagenes en blockchain seria muy caro.
      </p>
    </WarningBox>

    <h3>¿Por que importa esto?</h3>
    <p>Este patron on-chain/off-chain aplica a casi todo en Web3:</p>
    <ul>
      <li>Guardamos <strong>solo lo esencial</strong> en blockchain (propiedad, saldos, reglas)</li>
      <li>Guardamos <strong>datos pesados</strong> fuera (imagenes, documentos, archivos)</li>
    </ul>

    <TechnicalNote note-title="Almacenamiento off-chain">
      <p>
        IPFS es el estandar para almacenar archivos de forma descentralizada. Servicios como Pinata
        o NFT.Storage facilitan subir a IPFS.
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
