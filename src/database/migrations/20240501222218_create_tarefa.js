
exports.up = function(knex) {
    return knex.schema.createTable('tarefa', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('descricao');
        table.timestamp('prazo');
        table.integer('usuarioId').unsigned().references("id").inTable('usuario').onDelete('CASCADE');
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable('tarefa');
};
