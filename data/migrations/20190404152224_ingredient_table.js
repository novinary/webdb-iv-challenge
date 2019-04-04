
exports.up = function(knex) {
  return knex.schema.createTable("ingRec", table => {
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

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("ingRec");
};