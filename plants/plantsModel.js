const db = require("../database/connection");

module.exports = {
  find,
};

// finds plant
function find() {
  return db("plants");
}