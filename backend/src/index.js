
const express = require('express'); //importa as funcionalidades do express para dentro da variável express

const cors = require('cors'); 

const routes = require('./routes'); //importa uma variável de dentro de um arquivo. utilizar o ./ pq é um arquivo, não um pacote

const app = express(); //instancia a aplicação, cria a aplicação

app.use(cors());
app.use(express.json()); // informa que a aplicação está utilizando o json para o corpo das requisições. O express deverá transformar o que estiver no corpo da aplicação (em json) em javascript.  
app.use(routes);

app.listen(3333); //a aplicação "ouvirá" a porta 3333 no localhost




