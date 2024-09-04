const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');
const button = document.querySelector('button');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);



function myFunction() {
    for(let p of ps){
        p.style.background = backgroundColorBody;
        p.style.color = 'white';
    }
  }

