exports.seed = function(knex, Promise) {
  return knex('recipe').insert([
    { name: 'Mums recipe', dish_id: 1 }, // 1
    { name: 'Dads recipe', dish_id: 2 }, // 2
    { name: 'Uncles recipe', dish_id: 1 }, // 3
    { name: 'Magic recipe', dish_id: 3 }, // 4
  ]);
};