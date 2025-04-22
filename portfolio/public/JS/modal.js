const bootstrap = require("bootstrap")
document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.getElementById("btnLogin");
    
    // Função para abrir o modal
    function abrirModal() {
        const modal = new bootstrap.Modal("modal");
        modal.show();
    }

    // Configura o evento de clique no botão de login
    btnLogin.addEventListener('click', abrirModal);
});