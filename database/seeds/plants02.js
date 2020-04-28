exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("plants").insert([
        {
          user_id: 1,
          plant_name: "Abutilon",
          plant_species: "Flowering Maple",
          water_schedule: "Water in 1 day",
        },
        {
          user_id: 2,
          plant_name: "Summer Bloom",
          plant_species: "Ageratum",
          water_schedule: "Water in 2 days",
        },
        {
          user_id: 3,
          plant_name: "Aloe Vera",
          plant_species: "Aloe barbadensis",
          water_schedule: "Water in 3 days",
        },
        {
          user_id: 1,
          plant_name: "Barberton Daisy",
          plant_species: "Gebera Jamesonii",
          water_schedule: "Water in 4 days",
        },
        {
          user_id: 2,
          plant_name: "Bird of Paradise",
          plant_species: "Strelitzia Reginae",
          water_schedule: "Water in 5 days",
        },
        {
          user_id: 3,
          plant_name: "Busy Lizzie",
          plant_species: "Impatiens Walleriana",
          water_schedule: "Water in 6 days",
        },
        {
          user_id: 1,
          plant_name: "Calla lily",
          plant_species: "Zantedeschia aethiopica",
          water_schedule: "Water in 7 days",
        },
        {
          user_id: 2,
          plant_name: "Eternal Flame",
          plant_species: "Calathea Crocata",
          water_schedule: "Water in 8 days",
        },
        {
          user_id: 3,
          plant_name: "Lollipop",
          plant_species: "Pachystachys Lutea",
          water_schedule: "Water in 9 days",
        },
      ]);
    });
};
