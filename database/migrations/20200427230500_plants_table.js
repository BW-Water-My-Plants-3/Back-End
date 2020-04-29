
exports.up = function(knex) {
  return knex.schema.createTable("plants", tbl => {
    //   primary key
    tbl.increments('id');
    // foreign key - users table id
    tbl.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    // nickname - string, not nullable
    tbl.string('nickname')
        .notNullable();
    // species - string, not nullable
    tbl.string('species')
        .notNullable();
    // h2oFrequency - string, not nullable
    tbl.string('h2oFrequency')
        .notNullable();
    // image - string
    tbl.string('image');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('plants')
};
