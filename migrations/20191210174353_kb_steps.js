
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists("steps", function (table){
        table.increments().primary().unique("id");
        table.integar("stepNumber");
        table.string("stepDescription");
        table.integar("articleId")
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  
};
