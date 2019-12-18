exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('steps').del()
      .then(function () {
        // Inserts seed entries
        return knex('steps').insert([
          {title: "practice steps title 1", description: "practice steps description 1"},
          {title: "practice steps title 2", description: "practice steps description 2"},
          {title: "practice steps title 3", description: "practice steps description 3"},
        ]);
      });
  };