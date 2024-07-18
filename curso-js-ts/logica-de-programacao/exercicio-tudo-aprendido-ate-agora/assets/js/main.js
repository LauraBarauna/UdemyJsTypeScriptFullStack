function Escopo() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pesoValor = peso.value;
        const alturaValor = altura.value;

        function calcularIMC() {
            let IMC = pesoValor / (alturaValor * alturaValor);

            console.log(IMC);
            IMC = IMC.toFixed(2);

            resultado.innerHTML = '';

            if (IMC < 18.5) {
                resultado.innerHTML += `<p>Seu IMC é ${IMC} (Abaixo do peso)</p>`;
            } else if(IMC >= 18.5 && IMC <= 24.9){
                resultado.innerHTML += `<p>Seu IMC é ${IMC} (Peso normal)</p>`;
            } else if(IMC >= 25 && IMC <= 29.9){
                resultado.innerHTML += `<p>Seu IMC é ${IMC} (Sobrepeso)</p>`;
            } else if(IMC >= 30 && IMC <= 34.9){
                resultado.innerHTML += `<p>Seu IMC é ${IMC} (Obesidade grau 1)</p>`;
            } else if (IMC >= 35 && IMC <= 39.9){
                resultado.innerHTML += `<p>Seu IMC é ${IMC} (Obesidade grau 1)</p>`;
            } else if (IMC >= 40){
                resultado.innerHTML += `<p>Seu IMC é ${IMC} (Obesidade grau 3)</p>`;
            }

            resultado.classList.add('stilizado');
            
        }

        calcularIMC();
        
    }

    form.addEventListener('submit', recebeEventoForm);
}

Escopo();