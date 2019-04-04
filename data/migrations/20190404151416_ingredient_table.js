
exports.up = function (knex, Promise) {
    knex.schema.createTable("ingredient", table => {
        table.increments(id);
        table.string("name", 280).notNullable().unique();
        table.float("quantity");
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("ingredient");
};