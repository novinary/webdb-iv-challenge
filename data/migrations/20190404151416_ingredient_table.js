
exports.up = function (knex) {
 return knex.schema.createTable("ingredient", table => {
        table.increments();
        table.string("name", 280).notNullable().unique();
        table.float("quantity");
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("ingredient");
};