import axios from 'axios';

async function carregarTabelaAdmin() {
  const token = localStorage.getItem('token');
  if (!token) return;

  try {
    const response = await axios.get('/admin/tabela', {
      headers: { 
        'Authorization': `Bearer ${token}` 
      },
      responseType: 'text'   // importante pra receber HTML puro
    });

    // Se deu 200, injeta o HTML
    document
      .getElementById('tabela')
      .innerHTML = response.data;
  } catch (err) {
    if (err.response && err.response.status === 403) {
      console.warn('Sem permissão para ver a tabela');
    } else {
      console.error('Erro ao carregar tabela:', err);
    }
  }
}

// Executa ao carregar o script
carregarTabelaAdmin();
