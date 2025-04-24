const bootstrap = require("bootstrap")
const btnLogin = document.getElementById("btnLogin");

if(document.contains(btnLogin)){

document.addEventListener("DOMContentLoaded", () => {
    
    // Função para abrir o modal
    function abrirModal() {
        const modal = new bootstrap.Modal("modal");
        modal.show();
    }

    // Configura o evento de clique no botão de login
    btnLogin.addEventListener('click', abrirModal);
});
}