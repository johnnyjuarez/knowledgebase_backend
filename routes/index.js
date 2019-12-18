const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
    let message = "Knowledge Base Articles!"
    res.status(200).json({message})
    });

module.exports = router;