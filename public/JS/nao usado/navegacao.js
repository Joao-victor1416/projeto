(function () {
    function navegarViaAjax(url) {
        if (!url) return;

        const destino = document.querySelector('[output]');
        console.log('Carregando conteúdo de:', url);

        fetch(url)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Erro na requisição: ' + resp.status);
                }
                return resp.text();
            })
            .then(html => {
                console.log('Conteúdo recebido:', html);
                destino.innerHTML = html;


                // Executa qualquer script dentro do HTML carregado
                const resultado = html.match(/\<script\>([\s\S]*)<\/script\>/);
                if (resultado && resultado.length >= 2) {
                    eval(resultado[1]);
                }
            })
            .catch(err => console.error('Erro ao carregar conteúdo via AJAX:', err));
    }

    function configurarBotoes() {
        document.querySelectorAll('[data-link]')
            .forEach(button => {
                button.addEventListener('click', () => {
                    const url = button.getAttribute('data-link');
                    navegarViaAjax(url);
                });
            });
    }

    // Configura os botões ao carregar a página
    configurarBotoes();
})();