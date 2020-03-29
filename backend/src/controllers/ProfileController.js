const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents') //buscar os incidentes
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents);
    }
};