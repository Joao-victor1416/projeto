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

export function validarSenha(input, pS) {
    if (!input) return;
    const p = document.getElementById(`${pS}`);
    // console.log(p)
    input.addEventListener("input", () => {
      const valor = input.value;
      const regexSn = [/^.{8,}$/, /^(?=.*[A-Z]).*$/, /^(?=.*[!@#$%¨&*_=+\-]).*$/];
  
      if (!regexSn[0].test(valor)) {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        p.classList.remove("d-none");
        p.innerText = "*sua senha deve ter no minimo 8 caracteres";
      } else if (!regexSn[1].test(valor)) {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        p.classList.remove("d-none");
        p.innerText = "*sua senha deve ter no minimo 1 letra maiuscula";
      } else if (!regexSn[2].test(valor)) {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        p.classList.remove("d-none");
        p.innerText = "*sua senha deve ter no minimo 1 caractér especial";
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