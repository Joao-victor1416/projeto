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
const example = document.getElementById('example');
const example2 = document.getElementById('example2');

const popoverContent = `
  <div>
    <strong>Conteúdo do Popover</strong>
    <p>Texto adicional aqui.</p>
    <a class="nav-link active text-danger" href="#" aria-current="page">Conta</a>
  </div>
`;

function initPopover(element, content) {
  // Inicializando o popover
  const popoverInstance = new bootstrap.Popover(element, {
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
  if (window.innerWidth <= 992) {
    example.style.display = "none";
    example2.style.display = "block";
    initPopover(example2, popoverContent);
  } else {
    example2.style.display = "none";
    example.style.display = "block";
    initPopover(example, popoverContent);
  }
}

// Chamada inicial para verificar o tamanho da tela
checkScreenWidth();

// Monitora o redimensionamento da janela
window.addEventListener('resize', checkScreenWidth);
