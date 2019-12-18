exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('steps').del()
      .then(function () {
        // Inserts seed entries
        return knex('steps').insert([
          {stepNumber: 1, stepDescription: "practice steps stepDescription 1", articleId: 1},
          {stepNumber: 2, stepDescription: "practice steps stepDescription 2", articleId: 1},
          {stepNumber: 1, stepDescription: "practice steps stepDescription 3", articleId: 2},
          {stepNumber: 1, stepDescription: "practice steps stepDescription 3", articleId: 3},

        ]);
      });
  };