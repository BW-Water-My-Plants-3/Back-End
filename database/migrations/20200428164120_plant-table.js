
exports.up = function(knex, Promise) {
    return knex.schema.createTable('plants', tbl=>{
        tbl.increments('id');
        tbl.integer('user_id').notNullable().references('id').inTable('users');
        tbl.string('plant_name').notNullable();
        tbl.string('plant_species')
        tbl.text('water_schedule');
        tbl.date('last_water');
    })
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('plants');
};
