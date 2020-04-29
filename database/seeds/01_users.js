
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 01, username: 'user01', password: 'password01', phoneNumber: "0001111111"},
        {id: 02, username: 'user02', password: 'password02', phoneNumber: "0002222222"},
        {id: 03, username: 'user03', password: 'password03', phoneNumber: "0003333333"}
      ]);
    });
};
