
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    //   primary key
    tbl.increments('id');
    // username - string, unique, notNullable
    tbl.string('username')
        .unique()
        .notNullable()

    // phoneNumber - string of numbers, unique, notNullable
    tbl.string('phoneNumber', 10)
        .unique()
        .notNullable()
  
    // password - string, notNullable
    tbl.string('password')
        .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
