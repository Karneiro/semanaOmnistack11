const crypto = require('crypto'); //importa o pacote crypto - para gerar uma string aleatória

const connection = require('../database/connection');

module.exports = {
    async index(request,response) { // criar uma rota para listar todas as ongs cadastradas
        const ongs = await connection('ongs').select('*'); //irá selecionar todos os campos de todos os registros dentro da tabela ongs
        
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); // gera 4 bytes de caracteres aleatórios, converte em uma string do tipo exadecimal
        
        await connection('ongs').insert({ //insert na tabela ongs. o await faz com que o código seja todo executado, para continar
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({id}); //o retorno só pode ocorrer, depois do insert ser finalizado
    
    }
};