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

export function validarCheckbox(input) {
    if (!input) return;
    input.addEventListener("input", () => {
      const Valor = input;
      const p = document.getElementById("pCheckbox");
  
      if (!Valor.checked) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        p.classList.remove("d-none");
        p.innerText = "*Por Favor Aceite os Termos";
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