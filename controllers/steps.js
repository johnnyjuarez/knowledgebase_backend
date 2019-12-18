const steps = require("../models/steps");

async function index(req, res, next) {
        let message = await steps.getSteps();
        res.status(200).json({message}); 
 
};

async function getStepsByArticle(req, res, next) {
    let message = await store_oneService.getDetailList();
    res.status(200).json({message});
}

async function getCompleteArticle(req, res, next) {
    let message = await store_oneService.getDetailList();
    res.status(200).json({message});
}

async function create(req, res, next) {
    const {stepNumber, stepDescription, articleId} = req.body;
    if (stepNumber && stepDescription && articleId) {
        const addSteps = 
        {
            stepNumber : stepNumber,
            stepDescription : stepDescription,
            articleId : articleId
        };
        await steps.save(addSteps);
        res.status(201).json({ message: "Added Steps!"});
    } else {
        const err = new Error('Invalid Input');
        err.status = 404;
        return next(err);
    }
};

async function update(req, res, next) {
    const {stepNumber, stepDescription, articleId} = req.body;
        const updateSteps = 
        {
            stepNumber: stepNumber,
            stepDescription: stepDescription,
            articleId: articleId
        };
        let result = await steps.update(updateSteps);
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
    let result = await steps.delete(id);
    if(result.length) {
        res.status(200).json({message: "Removed Row!"});
    } else {
        const err = new Error("Invalid ID");
        err.status = 404;
        return next(err);
    }
};

module.exports = {index, create, update, remove, getStepsByArticle, getCompleteArticle};