const express = require("express");
const articles = require("../controllers/articles");
const router = express.Router();

router.get("/", articles.index); 

router.get("/detail", articles.detailIndex); 

router.post("/", articles.create); 

router.put("/:id", articles.update); 

router.delete("/:id", articles.remove);

module.exports = router;