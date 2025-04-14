document.addEventListener('DOMContentLoaded', function() {

    const gravarBtn = document.getElementById('gravar');
    const exibirBtn = document.getElementById('exibir');
    const dataDisplay = document.getElementById('dataDisplay');
    const displayContent = document.getElementById('displayContent');
    
    gravarBtn.addEventListener('click', function() {
      const nome = document.getElementById('nome').value;
      const endereco = document.getElementById('endereco').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;
      
      localStorage.setItem('nome', nome);
      localStorage.setItem('endereco', endereco);
      localStorage.setItem('email', email);
      localStorage.setItem('telefone', telefone);
      
      alert('Dados gravados com sucesso no localStorage!');
    });
    
    exibirBtn.addEventListener('click', function() {
      const nome = localStorage.getItem('nome');
      const endereco = localStorage.getItem('endereco');
      const email = localStorage.getItem('email');
      const telefone = localStorage.getItem('telefone');
      
      if (nome || endereco || email || telefone) {
        displayContent.innerHTML = `
          <p><strong>Nome:</strong> ${nome || 'Não informado'}</p>
          <p><strong>Endereço:</strong> ${endereco || 'Não informado'}</p>
          <p><strong>E-mail:</strong> ${email || 'Não informado'}</p>
          <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        `;
        dataDisplay.classList.remove('hidden');
      } else {
        alert('Nenhum dado encontrado no armazenamento local.');
      }
    });
    
    const enviarBtn = document.getElementById('enviar');
    
    enviarBtn.addEventListener('click', function() {
      const nome = document.getElementById('nome').value;
      const endereco = document.getElementById('endereco').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;
      const whatsappNum = document.getElementById('whatsapp').value;
      
      if (!whatsappNum) {
        alert('Por favor, insira um número de WhatsApp para envio.');
        return;
      }
      
      const mensagem = `Detalhes do Contato:\nNome: ${nome}\nEndereço: ${endereco}\nE-mail: ${email}\nTelefone: ${telefone}`;
      
      const mensagemCodificada = encodeURIComponent(mensagem);
      
      const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNum}&text=${mensagemCodificada}`;
      
      window.open(whatsappLink, '_blank');
    });
    
    document.querySelectorAll('.input-data input').forEach(input => {
      if (input.value) {
        input.nextElementSibling.nextElementSibling.style.transform = 'translateY(-20px)';
        input.nextElementSibling.nextElementSibling.style.fontSize = '14px';
        input.nextElementSibling.nextElementSibling.style.color = '#3498db';
      }
    });
  });