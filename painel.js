// Removido import do Firebase para autenticação

// Elementos da interface
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const authStatus = document.getElementById("authStatus");

const authArea = document.getElementById("auth-area");
const panel = document.getElementById("panel");
const lista = document.getElementById("lista");
const searchInput = document.getElementById("searchInput");

// Estado fictício de autenticação
let usuarioAutenticado = null;

// Autenticação fictícia
function autenticarFicticio(email, senha) {
  return email === "usuario1" && senha === "123456";
}

// Evento de login
loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passInput.value.trim();
  if (!email || !password) return alert("Preencha email e senha");

  authStatus.textContent = "Entrando...";
  if (autenticarFicticio(email, password)) {
    usuarioAutenticado = { email };
    atualizarInterface();
    carregarMensagens();
  } else {
    alert("Falha no login: email ou senha incorretos.");
    authStatus.textContent = "";
  }
});

// Evento de logout
logoutBtn.addEventListener("click", () => {
  usuarioAutenticado = null;
  atualizarInterface();
});

// Atualiza interface conforme autenticação
function atualizarInterface() {
  if (usuarioAutenticado) {
    authArea.style.display = "none";
    panel.style.display = "block";
    logoutBtn.style.display = "inline-block";
    authStatus.textContent = `Conectado como ${usuarioAutenticado.email}`;
  } else {
    authArea.style.display = "block";
    panel.style.display = "none";
    logoutBtn.style.display = "none";
    authStatus.textContent = "";
  }
}

// Carrega mensagens fictícias
function carregarMensagens() {
  lista.innerHTML = "Carregando mensagens...";
  // Mensagens fictícias
  const mensagens = [
    {
      texto: "Bem-vindo ao painel!",
      createdAt: new Date(),
      video: null
    },
    {
      texto: "Mensagem de teste.",
      createdAt: new Date(Date.now() - 3600000),
      video: null
    },
    {
      texto: "Aqui aparecerão as mensagens que forem enviadas para o banco de dados para o casal ver tudo depois.",
      createdAt: new Date(Date.now() - 7200000),
      video: null
    }
  ];
  lista.innerHTML = "";
  mensagens.forEach(d => {
    const timeText = d.createdAt ? d.createdAt.toLocaleString() : "";
    lista.innerHTML += `
      <div class="item">
        <strong>${timeText}</strong>
        ${d.texto ? `<p>${escapeHtml(d.texto)}</p>` : ""}
        ${d.video ? `<video controls style="width:100%"><source src="${d.video}"></video>` : ""}
      </div>
    `;
  });
}

// Função para escapar HTML
function escapeHtml(str) {
  return str.replace(/[&<>"'`=\/]/g, s => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;","`":"&#96;","/":"&#47;","=":"&#61;"
  }[s]));
}

// Inicializa interface ao carregar
window.addEventListener("DOMContentLoaded", () => {
  usuarioAutenticado = null;
  atualizarInterface();
});