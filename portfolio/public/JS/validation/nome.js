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

export function validarNome(input) {
    if (!input) return;
    input.addEventListener("input", () => {
      const Valor = input.value;
      const regexNm = /^[a-zAZ-ÀÙ-àú10.-ÿ\s]*$/;
      const p = document.getElementById("pNome");
  
      if (!regexNm.test(Valor) || Valor.trim() === "") {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        p.classList.remove("d-none");
        p.innerText = "*Qual o seu nome?";
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
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