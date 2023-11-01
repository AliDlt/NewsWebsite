const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

require("dotenv").config();

// Static Files
app.use(express.static("public"));

// Templating Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Parsing middleware
app.use(express.urlencoded({ extended: true }));

// Routes
const newsRouter = require("./src/routes/newsRoute");

app.use("/", newsRouter);
app.use("/article", newsRouter);

// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`));
