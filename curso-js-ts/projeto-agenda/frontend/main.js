import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Login, Cadastro } from './modules/Login';

import { ValidarForm } from './modules/criaUsuario';

// Agora você passa as classes diretamente ao instanciar
const login = new Login('.form-login');  // Passando o seletor da classe
const cadastro = new Cadastro('.form-cadastro');  // Passando o seletor da classe
const validaForm = new ValidarForm('.form-cria-user');

login.init();
cadastro.init();

validaForm.init();

console.log('Oi, front end funcionando!');
