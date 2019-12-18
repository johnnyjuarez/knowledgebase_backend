const express = require("express");
const store_twoController = require("../controllers/steps");
const router = express.Router();

router.get("/", steps.index); 

router.get("/detail", steps.detailIndex); 

router.post("/", steps.create); 

router.put("/:id", steps.update); 

router.delete("/:id", steps.remove);

module.exports = router;