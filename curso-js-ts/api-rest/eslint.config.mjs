import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node, // Permite globais do Node.js
      parserOptions: {
        ecmaVersion: 2021, // Defina a versão do ECMAScript
        sourceType: 'module', // Usar módulos ES6
      },
    },
    plugins: {
      // Defina seus plugins aqui
      // Exemplo:
      // 'plugin-name': pluginObject,
    },
    rules: {
      'no-debugger': 'warn', // Alerta sobre o uso de debugger
      'prefer-const': 'error', // Requer o uso de const quando a variável não for reatribuída
      'eqeqeq': ['error', 'always'], // Força o uso de === ao invés de ==
      'curly': 'error', // Exige chaves para todas as estruturas de controle
      'semi': ['error', 'always'], // Exige ponto e vírgula no final das instruções
      'indent': ['error', 2], // Usa 2 espaços para indentação
      'quotes': ['error', 'single'], // Exige aspas simples para strings
      'class-methods-use-this': off,
    },
  },
  pluginJs.configs.recommended, // Configuração recomendada para JavaScript
];
