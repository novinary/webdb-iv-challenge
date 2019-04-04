exports.seed = function(knex, Promise) {
  return knex('ingredient').insert([
    { name: 'sugar', quantity: 10 }, // 1
    { name: 'milk', quantity: 10.05 }, // 2
    { name: 'Vanilla extract', quantity: 0.1}, // 3
    { name: 'onion', quantity: 1}, // 4
  ]);
};