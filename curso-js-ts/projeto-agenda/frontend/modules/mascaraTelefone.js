import Inputmask from "inputmask";

export function MascaraTelefone(inputClass) {
  this.inputTelefone = document.querySelector(inputClass);
}

MascaraTelefone.prototype.init = function () {
  if (!this.inputTelefone) {
    console.warn(`Elemento ${this.inputTelefone} não encontrado no DOM.`);
    return;
  }
  this.aplicarMascara();
}

MascaraTelefone.prototype.aplicarMascara = function () {
    // Aplicando a máscara de telefone
    Inputmask('(+99) 99 9 9999-9999').mask(this.inputTelefone);

    // Evento de input para limpar caracteres especiais e contar os dígitos
    this.inputTelefone.addEventListener('input', () => {
      // Remove todos os caracteres que não forem números
      const telefoneLimpo = this.inputTelefone.value.replace(/\D/g, '');
  
      // Verifica se o telefone tem 13 dígitos
      if (telefoneLimpo.length !== 13) {
        this.inputTelefone.setCustomValidity('O telefone precisa ter 13 dígitos.');
      } else {
        this.inputTelefone.setCustomValidity(''); // Limpa a mensagem de erro
      }
  
      console.log('Valor limpo do input:', telefoneLimpo);
    });
  }
