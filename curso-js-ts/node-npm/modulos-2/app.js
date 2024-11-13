const Animal = require('./mod');
const cachorro = new Animal('tob');
cachorro.latir()

const path = require('path');
console.log(path.resolve(__dirname, '..', '..'))