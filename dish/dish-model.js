// db is a configured instance of knex that knows how to talk to the database
const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('dish');
}

function findById(id) {
  return db('dish')
    .where({ id })
    .first();
}

function add(dish) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db('dish').insert(dish, 'id');
}

function update(id, changes) {
  return db('dish')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('dish')
    .where({ id })
    .del();
}