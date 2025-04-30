import {
  InputNome,
  InputSobreNome,
  InputEmail,
  InputSenha,
  InputCheckbox,
  InputEmailLogin,
  InputSenhaLogin,
  submitLogin
} from "../utils/elementos.js";

import { validarForm } from "../validation/formCadastro.js";
import { validarFormLogin } from "../validation/formLogin.js";

export function validarEmail(input, pE) {
    if (!input) return;
    input.addEventListener("input", () => {
      const valor = input.value;
      const regexEm = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const p = document.getElementById(pE);
      if (!regexEm.test(valor) || valor.trim() === "") {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        p.classList.remove("d-none");
        p.innerText = "*Digite um Email válido";
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        p.classList.add("d-none");
      }
  
      if (
        InputNome &&
        InputCheckbox &&
        InputEmail &&
        InputSenha &&
        InputSobreNome
      ) {
        validarForm();
      } else if (InputEmailLogin && InputSenhaLogin && submitLogin) {
        validarFormLogin();
      }
    });
  }
  