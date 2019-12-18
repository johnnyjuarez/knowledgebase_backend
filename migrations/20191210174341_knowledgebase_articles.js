
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists("articles", function (table){
        table.increments().primary().unique("id");
        table.string("title");
        table.string("description");
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("articles");
};
