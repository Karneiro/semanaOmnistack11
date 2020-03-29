const knex = require('knex'); //importa o knex
const configuration = require('../../knexfile'); //importa as configurações que estão no knexfile

const connection = knex(configuration.development); //cria a conexão de desenvolvimento do knexfile

module.exports = connection; //exportar a conexão com o banco de dados
