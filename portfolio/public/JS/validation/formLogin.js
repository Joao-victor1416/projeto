import {
  InputEmailLogin,
  InputSenhaLogin,
  submitLogin
} from "../utils/elementos.js";

// Função de validação para o formulário de login
export function validarFormLogin() {
    const isEmailValid = InputEmailLogin.classList.contains("is-valid");
    const isSenhaValid = InputSenhaLogin.classList.contains("is-valid");
  
    // Habilitar o botão se ambos os campos estiverem válidos
    if (isEmailValid && isSenhaValid) {
      submitLogin.classList.remove("disabled");
      submitLogin.disabled = false;
      // ============
      // Adicione o evento de submit ao formulário de login
    } else {
      submitLogin.disabled = true;
      submitLogin.classList.add("disabled");
    }
  }