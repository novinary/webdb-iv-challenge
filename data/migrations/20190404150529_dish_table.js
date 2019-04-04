
exports.up = function(knex) {
   return knex.schema.createTable("dish", table => {
        table.increments();
        table.string("name", 280).notNullable().unique();

        table.timestamps(true, true)
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("dish");
};
