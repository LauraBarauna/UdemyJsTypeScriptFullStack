const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigada por entrar em contato com a gente.');
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
});
