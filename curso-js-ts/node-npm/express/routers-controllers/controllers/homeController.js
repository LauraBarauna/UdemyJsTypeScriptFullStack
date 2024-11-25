exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        nome do cliente: <input type="text" name="nome">
        <button>Olá mundo</button>
        </form>
        `);
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de post');
};