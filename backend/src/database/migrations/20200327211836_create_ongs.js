
exports.up = function(knex) {// o que acontece quando executa essa migration
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string ('name').notNullable();
      table.string ('email').notNullable();
      table.string ('whatsapp').notNullable();
      table.string ('city').notNullable();
      table.string ('uf',2).notNullable();
  });
};

exports.down = function(knex) {// se der algum problema, o que eu devo fazer
  return knex.schema.dropTable('ongs');
};
