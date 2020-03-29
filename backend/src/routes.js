const express = require('express'); // importa o pacote express

const OngController = require('./controllers/OngController'); //importa o arquivo de controller da ong
const IncidentController = require('./controllers/IncidentController'); //importa o arquivo de controller do incident
const ProfileController = require('./controllers/ProfileController'); //importa o arquivo de controller do profile
const SessionController = require('./controllers/SessionController'); //importa o arquivo de controller da sessão
const routes = express.Router(); //desacopla o módulo de rotas do express, em uma nova variável

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; //exporta uma variável de dentro de um arquivo.


