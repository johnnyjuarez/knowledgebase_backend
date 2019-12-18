const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const index = require("./routes/index");
const articles= require("./routes/articles");
const steps = require("./routes/steps");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use("/", index);
app.use("/articles", articles);
app.use("/steps", steps);

app.use((req, res, next) => {
    const err = new Error("Resource Not Found!");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({message : err.message});
});

app.listen(port);
console.log(`Server is now running on port ${port}`);

