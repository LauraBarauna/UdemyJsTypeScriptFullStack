import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Lucas',
      sobrenome: 'Veiga',
      email: 'lucasv@gmail.com',
      idade: 24,
      peso: 60,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
