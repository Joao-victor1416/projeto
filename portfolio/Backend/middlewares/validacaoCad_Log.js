function backLogin(emailLogin, senhaLogin) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexSenha = [
      /^.{8,}$/,
      /^(?=.*[A-Z]).*$/,
      /^(?=.*[!@#$%¨&*_=+\-]).*$/
    ];
  
    if (!regexEmail.test(emailLogin)) return false;
    for (const r of regexSenha) {
      if (!r.test(senhaLogin)) return false;
    }
    return true;
  }
  
  function backCadastro(nome, sobrenome, email, senha, termos) {
    const regexNome  = /^[a-zA-ZÀ-ÿ\s]*$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexSenha = [
      /^.{8,}$/,
      /^(?=.*[A-Z]).*$/,
      /^(?=.*[!@#$%¨&*_=+\-]).*$/
    ];
  
    if (!regexNome.test(nome) || !regexNome.test(sobrenome)) return false;
    if (!regexEmail.test(email)) return false;
    for (const r of regexSenha) {
      if (!r.test(senha)) return false;
    }
    if (!termos) return false;
    return true;
  }
  
  module.exports = { backCadastro, backLogin };
  