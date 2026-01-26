<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import CardGrid from '@/components/ui/CardGrid.vue'
import InfoBox from '@/components/ui/InfoBox.vue'
import WarningBox from '@/components/ui/WarningBox.vue'
import TechnicalNote from '@/components/ui/TechnicalNote.vue'
import CodeBlock from '@/components/ui/CodeBlock.vue'

const solidityCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// Un contrato super simple
contract MiPrimerContrato {
    // Variable que vive en blockchain
    string public mensaje;

    // Se ejecuta una vez al desplegar
    constructor(string memory _mensaje) {
        mensaje = _mensaje;
    }

    // Funcion para cambiar el mensaje
    function cambiarMensaje(string memory _nuevo) public {
        mensaje = _nuevo;
    }
}`
</script>

<template>
  <section id="smart-contracts">
    <h2>📜 Smart Contracts: El corazon de Web3</h2>

    <h3>¿Que es un smart contract?</h3>
    <p>
      Un <span class="highlight">programa que vive en la blockchain</span>. Se ejecuta
      automaticamente cuando se cumplen ciertas condiciones. Nadie puede detenerlo ni cambiarlo.
    </p>

    <InfoBox title="🎯 Quedate con esta idea:">
      <p>
        Una maquina expendedora. Metes dinero, seleccionas producto, y automaticamente te lo da. No
        necesitas confiar en un vendedor.
      </p>
    </InfoBox>

    <h3>¿Que NO es un smart contract?</h3>
    <WarningBox>
      <ul>
        <li><strong>NO es un contrato legal:</strong> Es codigo, no un documento juridico</li>
        <li><strong>NO es inteligente:</strong> Solo ejecuta lo que le programaron</li>
        <li>
          <strong>NO puede actuar solo:</strong> Necesita que alguien lo llame para ejecutarse
        </li>
      </ul>
    </WarningBox>

    <h3>¿Para que sirven?</h3>
    <ul>
      <li><strong>Tokens:</strong> Crear tu propia moneda o puntos</li>
      <li><strong>NFTs:</strong> Certificados de propiedad unicos</li>
      <li><strong>DeFi:</strong> Prestamos, exchanges, sin intermediarios</li>
      <li><strong>DAOs:</strong> Organizaciones gobernadas por codigo</li>
    </ul>

    <h3>Caracteristicas clave</h3>
    <CardGrid>
      <BaseCard title="✅ Inmutables">
        <p>Una vez desplegados, no se pueden cambiar.</p>
      </BaseCard>
      <BaseCard title="✅ Transparentes">
        <p>El codigo es publico. Cualquiera puede verlo.</p>
      </BaseCard>
      <BaseCard title="✅ Autonomos">
        <p>Se ejecutan solos cuando se cumplen las condiciones.</p>
      </BaseCard>
    </CardGrid>

    <h3>Solidity: El lenguaje de Ethereum</h3>
    <p>
      La mayoria de smart contracts se escriben en
      <span class="highlight-purple">Solidity</span>. Si sabes JavaScript, te parecera familiar.
    </p>

    <CodeBlock :code="solidityCode" language="Solidity" />

    <h3>¿Que es el Gas?</h3>
    <p>
      <span class="highlight">Gas</span> es la unidad que mide el trabajo computacional. Cada
      operacion tiene un costo en gas.
    </p>

    <InfoBox title="🎯 Quedate con esta idea:">
      <ul>
        <li><strong>Leer datos</strong> = Gratis (no cambia nada en blockchain)</li>
        <li><strong>Escribir datos</strong> = Cuesta gas (modifica el estado on-chain)</li>
      </ul>
      <p style="margin-top: 0.5rem">
        Esto es fundamental: <span class="highlight">escribir en blockchain cuesta dinero</span>.
        Por eso guardamos solo lo esencial on-chain.
      </p>
    </InfoBox>

    <TechnicalNote note-title="Conceptos de Solidity para profundizar despues">
      <ul>
        <li><code>msg.sender</code> - Quien llama la funcion</li>
        <li><code>msg.value</code> - ETH enviados con la llamada</li>
        <li><code>mapping</code> - Como un diccionario clave-valor</li>
        <li><code>modifier</code> - Validaciones reutilizables</li>
        <li><code>event</code> - Logs para el frontend</li>
      </ul>
    </TechnicalNote>

    <h3>🧟 Aprende Solidity jugando</h3>
    <BaseCard border-color="var(--accent-green)">
      <div style="display: flex; align-items: center; gap: 1rem">
        <div style="font-size: 3rem">🧟</div>
        <div>
          <h4 style="margin: 0">CryptoZombies</h4>
          <p style="margin: 0.5rem 0"><span class="highlight">cryptozombies.io</span></p>
          <p style="margin: 0">
            Tutorial interactivo donde aprendes Solidity creando un juego. Es gratis y muy
            entretenido.
          </p>
        </div>
      </div>
    </BaseCard>
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
