
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  return knex('ingRec').insert([
    { recipe_id: 1, ingredient_id: 1 }, // 1
    { recipe_id: 2, ingredient_id: 2 }, // 2
    { recipe_id: 3, ingredient_id: 1 }, // 3
    { recipe_id: 4, ingredient_id: 3 }, // 4
  ]);
};