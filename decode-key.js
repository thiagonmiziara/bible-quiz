// decode-key.js
const fs = require('fs');

const base64Key = process.env.FIREBASE_PRIVATE_KEY_BASE64;

if (!base64Key) {
  console.error("❌ FIREBASE_PRIVATE_KEY_BASE64 não encontrada no .env");
  process.exit(1);
}

const decoded = Buffer.from(base64Key, 'base64').toString('utf8');

console.log("✅ Chave formatada:\n");
console.log(decoded);

// Opcional: salvar em arquivo
fs.writeFileSync('.env.formatted-key', `FIREBASE_PRIVATE_KEY="${decoded.replace(/\n/g, '\\n')}"`);
console.log("\n✅ Salvo em .env.formatted-key (com \\n escapado)");
