const InputNome = document.getElementById("Nome");
const InputSobreNome = document.getElementById("Sobrenome");
const InputEmail = document.getElementById("Email");
const InputSenha = document.getElementById("Senha");
const InputCheckbox = document.getElementById("Checkbox");
const submit = document.getElementById("btn");

const InputEmailLogin = document.getElementById("EmailLogin");
const InputSenhaLogin = document.getElementById("SenhaLogin");
const submitLogin = document.getElementById("btnLogin");

const axios = require("axios");

function validarNome(input) {
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
function validarSobreNome(input) {
  if (!input) return;
  input.addEventListener("input", () => {
    const Valor = input.value;
    const regexSm = /^[a-zAZ-ÀÙ-àú10.-ÿ\s]*$/;
    const p = document.getElementById("pSobrenome");

    if (!regexSm.test(Valor) || Valor.trim() === "") {
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

function validarEmail(input, pE) {
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

function validarSenha(input, pS) {
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
function validarCheckbox(input) {
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
function validarForm() {
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

document.getElementById("modal").addEventListener("submit", async (event) => {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  const email = InputEmail.value;
  const senha = InputSenha.value;
  const nome = InputNome.value;
  const sobrenome = InputSobreNome.value;
  const termos = InputCheckbox.checked;

  // Verificando se todos os campos estão válidos antes de enviar
  if (
    InputNome.classList.contains("is-valid") &&
    InputSobreNome.classList.contains("is-valid") &&
    InputEmail.classList.contains("is-valid") &&
    InputSenha.classList.contains("is-valid") &&
    InputCheckbox.classList.contains("is-valid")
  ) {
    try {
      const response = await axios.post(
        "http://localhost:8000/cadastro",
        {
          nome,
          sobrenome,
          email,
          senha,
          termos,
        },
        {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );

      console.log("Resposta do servidor:", response);
      // Verificando a resposta da API
      if (response.data.success && response.data.termos === true) {
        const token = response.data.token;
        localStorage.setItem("token", token); // 🔐 Salva o token
        console.log("Redirecionando para:", response.data.redirectUrl);
        window.location.href = response.data.redirectUrl; // Redirecionamento após sucesso
      }
    } catch (error) {
      alert("Erro ao tentar realizar o cadastro.");
    }
  }
});

// Função de validação para o formulário de login
function validarFormLogin() {
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
document
  .getElementById("form")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const emailLogin = InputEmailLogin.value;
    const senhaLogin = InputSenhaLogin.value;
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        { emailLogin, senhaLogin },
        {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );
      // Verifica a resposta e redireciona em caso de sucesso
      if (response.data.success && response.data.termos === true) {
        const token = response.data.token;
        localStorage.setItem("token", token); // 🔐 Salva o token
        console.log("redirecionando para :{0}", response.data.redirectUrl);
        alert("login.");
        window.location.href = response.data.redirectUrl;
      }
    } catch (error) {
      alert("Erro ao fazer login.");
    }
  });

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
  // Eventos de clique
  const aRegistro = document.getElementById("aRegistro");
  aRegistro.addEventListener("click", showRegistrationForm);

  document
    .querySelector("#modal", ".btn-close")
    .addEventListener("click", showLoginForm);
  document.querySelector("body").addEventListener("input", showLoginForm);
});

// ===========================
