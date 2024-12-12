import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Login, Cadastro } from './modules/Login';

import { ValidarFormUsuario } from './modules/criaUsuario';

import { MascaraTelefone } from './modules/mascaraTelefone';

// Agora você passa as classes diretamente ao instanciar
const login = new Login('.form-login');  // Passando o seletor da classe
const cadastro = new Cadastro('.form-cadastro');
  // Passando o seletor da classe
const validaForm = new ValidarFormUsuario('.form-cria-user');

const mascaraTelefone = new MascaraTelefone('.telefone');

login.init();
cadastro.init();

validaForm.init();

mascaraTelefone.init();

console.log('Oi, front end funcionando!');
