
exports.up = function(knex, Promise) {
    knex.schema.createTable("dish", table => {
        table.increments(id);
        table.string("name", 280).notNullable();
      })  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("dish");
};
