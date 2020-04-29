// connect to the db
const db = require('../database/connection');

module.exports = {
    add,
    update,
    findBy,
    findById
}

function add(user) {
    return db('users').insert(user, "*");
}

function update(id, changes) {
    return db('users').where({ id }).update(changes);
}

function findBy(filter) {
    return db('users').where(filter).first();
}

function findById(id) {
    return db('users').where({ id }).first();
}