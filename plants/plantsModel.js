const db = require('../database/connection');

module.exports = {
    add,
    update,
    remove,
    getAll,
    findById,
}

function add(newPlant) {
    return db('plants').insert(newPlant);
}

function getAll(user_id) {
    return db('plants').where({ user_id });
}

function findById(id) {
    return db('plants').where({ id }).first();
}

function remove(id) {
    return db('plants').where({ id }).del();
}

function update(id, changes){
    return db('plants').where({ id }).update(changes);
}