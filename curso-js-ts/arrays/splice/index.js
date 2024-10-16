function mostrarMensagem() {
    console.log('Essa mensagem aparece depois de 3 segundos!');
  }
  
  setTimeout(mostrarMensagem, 3000); // Executa mostrarMensagem após 3 segundos
  console.log('Essa mensagem aparece imediatamente!');
  