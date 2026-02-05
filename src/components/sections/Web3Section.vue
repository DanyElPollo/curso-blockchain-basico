<script setup lang="ts">
import InfoBox from '@/components/ui/InfoBox.vue'
import WarningBox from '@/components/ui/WarningBox.vue'
import TechnicalNote from '@/components/ui/TechnicalNote.vue'
import CodeBlock from '@/components/ui/CodeBlock.vue'
import WalletConnect from '../ui/WalletConnect.vue'

const web3Code = `import { Web3 } from "web3";

// Conectar a MetaMask
const web3 = new Web3(window.ethereum);
await window.ethereum.request({ method: "eth_requestAccounts" });

// Obtener cuenta
const accounts = await web3.eth.getAccounts();
const account = accounts[0];

// Leer balance
const balance = await web3.eth.getBalance(account);
console.log(web3.utils.fromWei(balance, "ether"), "ETH");

// Interactuar con un contrato
const contract = new web3.eth.Contract(
  ABI,        // interfaz del contrato
  "0x..."     // direccion del contrato
);

// Llamar una funcion (lectura)
const resultado = await contract.methods.miFuncion().call();

// Enviar transaccion (escritura)
await contract.methods.miFuncion().send({
  from: account
});`


const wagmiCode = `const { address, isConnected } = useAccount();
const { connect } = useConnect();
const { data: balance } = useBalance({ address });`

const architectureDiagram = `    ┌─────────────────────────────────────────────────┐
    │            TU FRONTEND (React, etc.)            │
    │                      │                          │
    │                      ▼                          │
    │              Ethers.js / Wagmi                  │
    │   (traduce JavaScript a llamadas blockchain)    │
    └──────────────────────┼──────────────────────────┘
                           │
                           ▼
    ┌─────────────────────────────────────────────────┐
    │              WALLET (MetaMask)                  │
    │   (guarda claves y firma transacciones)         │
    └──────────────────────┼──────────────────────────┘
                           │
                           ▼
    ┌─────────────────────────────────────────────────┐
    │               BLOCKCHAIN                        │
    │           Smart Contracts                       │
    └─────────────────────────────────────────────────┘`
</script>

<template>
    <section id="web3">
        <h2>🌐 Web3: Conectando tu app a blockchain</h2>

        <InfoBox title="🎯 Quédate con esta idea:">
            <p>
                Tu frontend (React, Vue, etc.)
                <span class="highlight">no habla directamente con blockchain</span>.
                Usa una librería (Ethers.js, Web3.js) que se comunica con la wallet del usuario,
                y la wallet firma y envía las transacciones.
            </p>

            <WalletConnect/>
        </InfoBox>


        <h3>El modelo mental</h3>
        <div class="diagram">
            <pre
                style="text-align: left; display: inline-block; background: transparent; border: none; color: var(--text-secondary)">{{ architectureDiagram }}</pre>
        </div>

        <h3>¿Que hace Web3.js?</h3>
        <p>
            <span class="highlight">Web3.js</span> traduce tu codigo JavaScript a llamadas que
            blockchain entiende:
        </p>
        <ul>
            <li><strong>Conectar</strong> con la wallet del usuario</li>
            <li><strong>Leer</strong> datos de smart contracts (gratis)</li>
            <li><strong>Escribir</strong> datos en smart contracts (requiere firma y gas)</li>
        </ul>

        <CodeBlock :code="web3Code" language="ethers.js" />

        <h3>¿Que es el ABI?</h3>
        <p>
            El <span class="highlight-purple">ABI</span> (Application Binary Interface) es como el
            "manual" del contrato. Le dice a tu app que funciones existen y como llamarlas.
        </p>

        <InfoBox title="📌 No necesitas memorizar esto ahora:">
            <p>
                El ABI se genera automaticamente cuando compilas. Solo recuerda que necesitas el ABI para
                interactuar con un contrato.
            </p>
        </InfoBox>

        <WarningBox title="🎯 Resumen del flujo:">
            <ol>
                <li>Tu app usa Ethers.js para preparar la llamada</li>
                <li>MetaMask muestra la transaccion al usuario</li>
                <li>El usuario firma con su clave privada</li>
                <li>La transaccion se envia a blockchain</li>
            </ol>
        </WarningBox>

        <TechnicalNote note-title="Stack moderno para React: Wagmi + Viem">
            <p>Si usas React, considera Wagmi que te da hooks listos para usar:</p>
            <CodeBlock :code="wagmiCode" />
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

.diagram {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    margin: var(--spacing-xl) 0;
    text-align: center;
    overflow-x: auto;
}

.diagram pre {
    font-family: 'Fira Code', 'Consolas', monospace;
    font-size: 0.85rem;
    margin: 0;
    padding: 0;
}

.wallet-actions {
    margin-top: var(--spacing-lg);
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
}

.btn-primary {
    padding: 0.6rem 1.5rem;
    border-radius: var(--radius-md);
    background: var(--accent);
    color: #000;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 212, 255, 0.35);
}

.wallet-info {
    display: flex;
    flex-direction: column;
}

.wallet-label {
    font-size: 0.75rem;
    color: var(--text-muted);
}

.wallet-address {
    font-family: monospace;
    font-size: 0.9rem;
    color: var(--text-primary);
}
</style>
