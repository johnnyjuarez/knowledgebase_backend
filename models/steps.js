const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV]);



const steps = {
    getSteps: function(){
        return knex('steps')
            .select('*')
    },
    getStepsByArticle: function(){
        return knex('steps')
        .join('articles','steps.articlesId','articles.id')
            .select('*')
            .then(data => data)
    },
    getCompleteArticle: function() { // This one works
        return knex("articles")
        .join("steps", "articles.id", "steps.articleId")
        .select('articles.id','articles.title','articles.description','steps.stepNumbers','steps.stepDescription')
        .then(data => data);
    },
    save: function() {
        return knex("steps")
            .insert();
    },
    update: function() {
        return knex("steps")
            .where({})
            .returning("*")
            .update({
            });
    },
    delete: function() {
        return knex("steps")
            .where({id: id})
            .returning("*")
            .del();
    }
}

module.exports = steps;