const express = require("express");
const newsRouter = express.Router();

const newsController = require("../controllers/newsController");

newsRouter.get("/", newsController.home);
newsRouter.get("/nytimes", newsController.nytimes);
newsRouter.get("/cbc", newsController.cbc);
newsRouter.get("/cnn", newsController.cnn);
newsRouter.get("/aljazeera", newsController.aljazeera);
newsRouter.post("/newsSingle", newsController.newsSingle);

module.exports = newsRouter;
