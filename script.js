// script.js sem Firebase

const elMsg = document.getElementById("mensagem");
const elFile = document.getElementById("videoFile");
const btnEnviar = document.getElementById("enviar");
const btnLimpar = document.getElementById("limpar");
const statusEl = document.getElementById("status");

// Array para armazenar mensagens localmente
const mensagensLocais = [];

btnLimpar.addEventListener("click", () => {
  elMsg.value = "";
  elFile.value = "";
  statusEl.textContent = "";
});

btnEnviar.addEventListener("click", async () => {
  const texto = elMsg.value.trim();
  const file = elFile.files[0];

  if (!texto && !file) {
    alert("Digite uma mensagem ou envie um vídeo.");
    return;
  }

  try {
    statusEl.textContent = "Enviando…";
    btnEnviar.disabled = true;

    let videoURL = "";
    if (file) {
      // Cria uma URL temporária para o vídeo
      videoURL = URL.createObjectURL(file);

      // Salva mensagem localmente
      mensagensLocais.push({
        texto: texto || "",
        video: videoURL,
        createdAt: new Date()
      });

      statusEl.textContent = "Enviado com sucesso! Obrigado 💌";
      btnEnviar.disabled = false;
      elMsg.value = "";
      elFile.value = "";
    } else {
      // Só texto
      mensagensLocais.push({
        texto: texto,
        video: "",
        createdAt: new Date()
      });
      statusEl.textContent = "Mensagem enviada! Obrigado 💌";
      btnEnviar.disabled = false;
      elMsg.value = "";
    }

    // Opcional: exibir mensagens no console
    console.log("Mensagens locais:", mensagensLocais);

  } catch (err) {
    console.error(err);
    alert("Erro ao enviar. Tente novamente.");
    btnEnviar.disabled = false;
    statusEl.textContent = "";
  }
});