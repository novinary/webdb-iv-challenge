
exports.seed = function(knex, Promise) {
  return knex('dish').insert([
    { name: 'Pasta' }, // 1
    { name: 'Cookie' }, // 2
    { name: 'Pizza' }, // 3
    { name: 'Kebab' }, // 4
  ]);
};