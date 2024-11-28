const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Outra coisa qualquer',
    descricao: 'Outra descrição.'
})
    .then(dados => console.log(dados))
    .catch(err => console.log(err));

exports.paginaInicial = (req, res,) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};