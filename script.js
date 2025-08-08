import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqTe0cO2fimSZXsb1H3jdrJ8Q6X7TQz_0",
  authDomain: "capsula-do-tempo-5c783.firebaseapp.com",
  projectId: "capsula-do-tempo-5c783",
  storageBucket: "capsula-do-tempo-5c783.firebasestorage.app",
  messagingSenderId: "660459572598",
  appId: "1:660459572598:web:74e55511f7295a1bf27e57",
  measurementId: "G-ESC3WMG3DD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function carregarMensagens() {
    const lista = document.getElementById("lista-mensagens");
    lista.innerHTML = "<p>Carregando...</p>";

    const q = query(collection(db, "mensagens"), orderBy("data", "desc"));
    const docsSnap = await getDocs(q);

    lista.innerHTML = "";
    docsSnap.forEach(doc => {
        const data = doc.data();
        lista.innerHTML += `
            <div class="mensagem">
                <strong>${new Date(data.data).toLocaleString()}:</strong> ${data.texto}
            </div>
        `;
    });
}

carregarMensagens();
