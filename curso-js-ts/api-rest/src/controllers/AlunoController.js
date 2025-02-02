import Aluno from '../models/Aluno';

class AlunoController {
  // Store
  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      const { id, nome, sobrenome, email, idade, peso, altura } = novoAluno;
      return res.json({ id, nome, sobrenome, email, idade, peso, altura });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }


  // Index
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  // Delete
  async delete(req, res) {
    try {

      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      };

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      };

      await aluno.destroy();
      return res.json('Usuário deletado!');


    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}

export default new AlunoController();
