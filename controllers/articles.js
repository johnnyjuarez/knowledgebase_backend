const articles = require("../models/articles");

async function index(req, res, next) {
        let message = await articles.getSteps();
        res.status(200).json({message}); 
 
};

async function getArticlesDescription(req, res, next) {
    let message = await articles.getArticlesDescription();
    res.status(200).json({message});
}


async function create(req, res, next) {
    const {title, description} = req.body;
    if (title && description) {
        const addArticle = 
        {
            title : title,
            description : description,
        };
        await articles.save(addArticle);
        res.status(201).json({ message: "Added Article!"});
    } else {
        const err = new Error('Invalid Input');
        err.status = 404;
        return next(err);
    }
};

async function update(req, res, next) {
    const {title, description} = req.body;
        const updateArticle = 
        {
            title : title,
            description : description,
        };
        let result = await articles.update(updateArticle);
        if(result.length) {
            res.status(201).json({message : "Updated Row!"});
        } else {
            const err = new Error("Invalid Input");
            err.status = 404;
            return next(err);
        }
        
};

async function remove(req, res, next) {
    const id = Number(req.params.id);
    let result = await articles.delete(id);
    if(result.length) {
        res.status(200).json({message: "Removed Row!"});
    } else {
        const err = new Error("Invalid ID");
        err.status = 404;
        return next(err);
    }
};

module.exports = {index, create, update, remove, getArticlesDescription};