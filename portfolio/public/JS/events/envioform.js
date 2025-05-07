import axios from "axios";
import {
  InputNome,
  InputSobreNome,
  InputEmail,
  InputSenha,
  InputCheckbox,
  InputEmailLogin,
  InputSenhaLogin,
  modal,
  form
} from "../utils/elementos.js";

export function registrarEnvioFormularios() {
  if (modal && document.contains(modal)) {
    modal.addEventListener("submit", async (event) => {
      event.preventDefault();
      const nome = InputNome.value;
      const sobrenome = InputSobreNome.value;
      const email = InputEmail.value;
      const senha = InputSenha.value;
      const termos = InputCheckbox.checked;

      if (
        InputNome.classList.contains("is-valid") &&
        InputSobreNome.classList.contains("is-valid") &&
        InputEmail.classList.contains("is-valid") &&
        InputSenha.classList.contains("is-valid") &&
        InputCheckbox.classList.contains("is-valid")
      ) {
        try {
          const response = await axios.post("http://localhost:8000/cadastro", {
            nome, sobrenome, email, senha, termos
          });

          if (response.data.success && response.data.termos === true) {
            const token = response.data.token;
            const termos = response.data.termos;
            localStorage.setItem("token", token);// 🔐 Salva o token
            localStorage.setItem("termos", termos);// 🔐 Salva o token
            window.location.href = response.data.redirectUrl;
          }
        } catch (error) {
          alert("Erro ao tentar realizar o cadastro.");
        }
      }
    });
  }

  if (form && document.contains(form)) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const emailLogin = InputEmailLogin.value;
      const senhaLogin = InputSenhaLogin.value;

      try {
        const response = await axios.post("http://localhost:8000/login", {
          emailLogin, senhaLogin
        });
            // Verifica a resposta e redireciona em caso de sucesso
        if (response.data.success && response.data.termos === true) {
          const token = response.data.token;
          const termos = response.data.termos;
          localStorage.setItem("token", token);// 🔐 Salva o token
          localStorage.setItem("termos", termos);// 🔐 Salva o token
          window.location.href = response.data.redirectUrl;
        }
      } catch (error) {
        alert("Erro ao fazer login.");
      }
    });
  }
}
