
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){
      table.increments(); // cria uma chave primária auto_incremento
      table.string('title').notNullable(); //cria a coluna title, com valores de texto
      table.string('description').notNullable(); //cria uma coluna description, com valores de texto
      table.decimal('value').notNullable(); //cria uma coluna value, com valores decimais

      table.string('ong_id').notNullable(); //cria a coluna ong_id
      table.foreign('ong_id').references('id').inTable('ongs'); //cria a chave estrangeira na coluna ong_id
  });
};

exports.down = function(knex) {
};
