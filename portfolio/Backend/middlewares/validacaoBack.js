function backLogin(emailLogin, senhaLogin) {
    // Regex para validar o formato de email
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Regex para validar senha (mínimo de 8 caracteres)
    const regexSenha = [/^.{8,}$/, /^(?=.*[A-Z]).*$/, /^(?=.*[!@#$%¨&*_=+\-]).*$/];
   
    // Verifica o email
    if (!regexEmail.test(emailLogin)) {
        console.log(typeof(emailLogin))
        console.log(emailLogin)
        return false;
    }
    
    // Verifica a senha
    for (let i = 0; i < regexSenha.length; i++) {
        if (!regexSenha[i].test(senhaLogin)) {
            return false;
        }
    }

    // Se ambos forem válidos, retorna uma mensagem de sucesso
    return true;
}


function backCadastro(nome, sobrenome, email, senha, termos) {
    // Regex para validar nome e sobrenome
    const regexNome = /^[a-zA-ZÀ-ÿ\s]*$/
    // Regex para validar email
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Regex para validar senha (mínimo de 8 caracteres, ao menos uma letra maiúscula, ao menos um símbolo especial)
    const regexSenha = [/^.{8,}$/, /^(?=.*[A-Z]).*$/, /^(?=.*[!@#$%¨&*_=+\-]).*$/];
    // Verifica nome e sobrenome
    if (!regexNome.test(nome)) {
        return false;
    }
    if (!regexNome.test(sobrenome)) {
        return false;
    }
    // Verifica o email
    if (!regexEmail.test(email)) {
        return false;
    }
    // Verifica a senha com todas as regras
    for (let i = 0; i < regexSenha.length; i++) {
        if (!regexSenha[i].test(senha)) {
            return false;
        }
    }
    // Verifica se os termos foram aceitos
    if (!termos) {
        return false;
    }
    return true;
}
module.exports = {backCadastro, backLogin}