
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'user01', password: 'password01', phoneNumber: "0001111111"},
        {username: 'user02', password: 'password02', phoneNumber: "0002222222"},
        {username: 'user03', password: 'password03', phoneNumber: "0003333333"}
      ]);
    });
};
