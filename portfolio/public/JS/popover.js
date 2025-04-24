/*
const popoverContent = `
    <div>
      <strong>Conteúdo do Popover</strong>
      <p>Texto adicional aqui.</p>
      <a class="nav-link active text-danger" href="#" aria-current="page">Conta</a>
    </div>
  `;
function popover(examples,content) {
  // Inicializando o popover
const popoverInstance = new bootstrap.Popover(examples, {
  content: content,
  html: true,
  title: 'Popover com Ícone',
  trigger: 'click',  // Popover aparece no foco ou clique
  placement: 'bottom'  // Posição do popover
});

// Função para fechar o popover ao clicar fora
document.addEventListener('click', (event) => {
  const isClickInside = examples.contains(event.target);
  if (!isClickInside) {
    popoverInstance.hide();  // Esconde o popover se clicar fora
  }
});

}

if(document.body.style.width <= 992){
  example.style.display = "none"
  example2.style.display = "block"
popover(example2,popoverContent)
} else if(document.body.style.width >= 993){
  example2.style.display = "none"
  example.style.display = "block"
popover(example,popoverContent)
  
}*/

// =============================================

const bootstrap = require("bootstrap");
const popover = document.getElementById('popover');
const popover2 = document.getElementById('popover2');

if(document.contains(popover && popover2)){
const popoverContent = `
  <div>
    <strong>Conteúdo do Popover</strong>
    <p>Texto adicional aqui.</p>
    <a class="nav-link active text-danger" href="#" aria-current="page">Conta</a>
  </div>
`;
let popoverInstance = null;

function initPopover(element, content) {
  if (popoverInstance) {
    popoverInstance.dispose(); // Destrói a instância anterior se existir
  }
  // Inicializando o popover
  popoverInstance = new bootstrap.Popover(element, {
    content: content,
    html: true,
    title: 'Popover com Ícone',
    trigger: 'click',
    placement: 'bottom'
  });
  // Função para fechar o popover ao clicar fora
  document.addEventListener('click', (event) => {
    const isClickInside = element.contains(event.target);
    if (!isClickInside && popoverInstance._isShown) {
      popoverInstance.hide(); // Esconde o popover se clicar fora
    }
  });
}

function checkScreenWidth() {
  if (popoverInstance) {
    popoverInstance.dispose(); // <- adiciona isso pra sempre limpar o anterior
    popoverInstance = null;
  }
  if (window.innerWidth <= 992) {
    popover.style.display = "none";
    popover2.style.display = "block";
    initPopover(popover2, popoverContent);
  } else {
    popover2.style.display = "none";
    popover.style.display = "block";
    initPopover(popover, popoverContent);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  // Chamada inicial para verificar o tamanho da tela
  checkScreenWidth();
  // Monitora o redimensionamento da janela
  window.addEventListener('resize', checkScreenWidth);
})
}
