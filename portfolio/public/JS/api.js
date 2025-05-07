
import {
  InputNome,
  InputSobreNome,
  InputEmail,
  InputSenha,
  InputCheckbox,
  InputEmailLogin,
  InputSenhaLogin,
  submit,
  submitLogin
} from "./utils/elementos.js";

import { validarNome } from "./validation/nome.js";
import { validarSobreNome } from "./validation/sobrenome.js";
import { validarEmail } from "./validation/email.js";
import { validarSenha } from "./validation/senha.js";
import { validarCheckbox } from "./validation/checkbox.js";

import { validarForm } from "./validation/formCadastro.js";
import { validarFormLogin } from "./validation/formLogin.js";


// Chama a função para registrar o envio dos formulários
import { registrarEnvioFormularios } from "./events/envioform.js";
import "./events/tabela.js";
import "./validation/acesso_rotas.js";

if(document.contains(submit || submitLogin)) {
document.addEventListener("DOMContentLoaded", () => {
  submit.disabled = true;
  submitLogin.disabled = true;
  function showRegistrationForm() {
    validarNome(InputNome);
    validarSobreNome(InputSobreNome);
    validarEmail(InputEmail, "pEmail");
    validarSenha(InputSenha, "pSenha");
    validarCheckbox(InputCheckbox);
    validarForm();
  }

  function showLoginForm() {
    validarEmail(InputEmailLogin, "pEmailLogin");
    validarSenha(InputSenhaLogin, "pSenhaLogin");
    validarFormLogin();
  }

  showLoginForm();
  registrarEnvioFormularios();
  // Eventos de clique
  const aRegistro = document.getElementById("aRegistro");
  aRegistro.addEventListener("click", showRegistrationForm);

  document
    .querySelector("#modal", ".btn-close")
    .addEventListener("click", showLoginForm);
  document.querySelector("body").addEventListener("input", showLoginForm);
});
// ===========================
}