document.getElementById('entrar').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário para teste
  
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
  
    if (login && senha) {
      alert('Login realizado com sucesso!');
      // Aqui você pode adicionar a lógica de autenticação
    } else {
      alert('Preencha todos os campos.');
    }
  });
  
  document.getElementById('trocar-local').addEventListener('click', function() {
    alert('Função para trocar local acionada!');
  });
  