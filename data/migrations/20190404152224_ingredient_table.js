
exports.up = function(knex, Promise) {
    knex.schema.createTable("ingRec", table => {
        table
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipe')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  
        table
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredient')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("ingRec");
};