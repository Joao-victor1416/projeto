import axios from "axios";
document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('tabela');
  const token = localStorage.getItem('token');
  
 console.log('Token:', token); // Verifica se o token está sendo recuperado corretamente
  if (!token || !container) return;

  try {
    const response = await axios.get('http://localhost:8000/admin/usuarios', {
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    if (!response.data.autorizado) return; // Não autorizado, não renderiza a tabela

    const usuarios = response.data.usuarios;

    // Monta a tabela usando Bootstrap
    let tabelaHTML = `
      <div class="table-responsive table-hover mt-4">
        <table class="table table-bordered table-striped">
          <thead class="table-dark">
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Email</th>
              <th>Cargos</th>
            </tr>
          </thead>
          <tbody>
    `;

    usuarios.forEach(usuario => {
      tabelaHTML += `
        <tr>
          <td>${usuario.nome}</td>
          <td>${usuario.sobrenome}</td>
          <td>${usuario.email}</td>
          <td>${usuario.cargos.join(', ')}</td>
        </tr>
      `;
    });

    tabelaHTML += `
          </tbody>
        </table>
      </div>
    `;

    container.innerHTML = tabelaHTML;

  } catch (error) {
    console.log('Erro ao carregar usuários:', error);
  }
});
