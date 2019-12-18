const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV]);



const articles = {
    getArticlesDescription: function(){
        return knex('articles')
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
        return knex("articles")
            .insert();
    },
    update: function() {
        return knex("articles")
            .where({})
            .returning("*")
            .update({
            });
    },
    delete: function() {
        return knex("articles")
            .where({id: id})
            .returning("*")
            .del();
    }
}

module.exports = articles;