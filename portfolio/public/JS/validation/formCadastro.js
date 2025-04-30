import {
  InputNome,
  InputSobreNome,
  InputEmail,
  InputSenha,
  InputCheckbox,
  submit
} from "../utils/elementos.js";

export function validarForm() {
  const isNomeValid = InputNome.classList.contains("is-valid");
  const isSobreNomeValid = InputSobreNome.classList.contains("is-valid");
  const isEmailValid = InputEmail.classList.contains("is-valid");
  const isSenhaValid = InputSenha.classList.contains("is-valid");
  const isCheckboxValid = InputCheckbox.classList.contains("is-valid");

  // Habilitar o botão se todos os campos estiverem válidos
  if (
    isNomeValid &&
    isSobreNomeValid &&
    isEmailValid &&
    isSenhaValid &&
    isCheckboxValid
  ) {
    submit.disabled = false;
    submit.classList.remove("disabled");
    submit.classList.remove("text-white");
    submit.style.color = "white";
    // ===============
  } else {
    submit.disabled = true;
    submit.classList.add("disabled");
  }
}
