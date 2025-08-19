import React, { useState } from "react";

export default function Home() {
  const jsSignExample = `
const crypto = require("crypto");

function signRequest(secretKey, payload) {
  const stringData = JSON.stringify(payload);
  return crypto.createHmac("sha256", secretKey).update(stringData).digest("hex");
}

const payload = { amount: 100, currency: "XOF" };
console.log(signRequest("votre_clef_secrete", payload));
  `;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Documentation API InPays</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Présentation</h2>
          <p className="mb-2">
            Bienvenue sur l’API InPays. Cette API permet de gérer les paiements et transferts financiers
            avec un haut niveau de sécurité via la signature HMAC-SHA256.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Authentification</h2>
          <p className="mb-2">Utilisez votre clé API et générez une signature HMAC-SHA256 pour sécuriser vos requêtes.</p>
          <div className="bg-gray-900 text-white p-4 rounded-lg relative">
            <pre>{jsSignExample}</pre>
            <button
              onClick={() => copyToClipboard(jsSignExample)}
              className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
            >
              {copied ? "Copié!" : "Copier"}
            </button>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Endpoints</h2>
          <ul className="list-disc list-inside">
            <li><code>POST /api/v1/payment/initiate</code> – Initier un paiement</li>
            <li><code>GET /api/v1/payment/status/:id</code> – Vérifier le statut d’un paiement</li>
            <li><code>POST /api/v1/payout/initiate</code> – Initier un transfert sortant</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Codes d'erreurs</h2>
          <ul className="list-disc list-inside">
            <li><strong>400</strong> : Requête invalide</li>
            <li><strong>401</strong> : Non autorisé (clé API invalide)</li>
            <li><strong>500</strong> : Erreur interne du serveur</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Annexes</h2>
          <p>La liste des pays et banques disponibles peut être intégrée ici.</p>
        </section>
      </div>
    </div>
  );
}
