
exports.up = function (knex, Promise) {
    knex.schema.createTable("recipe", table => {
        table.increments();
        table.string("name", 280).notNullable() .unique();
        table
            .integer("dish_id")
            .unsigned()
            .references("id")
            .inTable("dish")
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("recipe");
};