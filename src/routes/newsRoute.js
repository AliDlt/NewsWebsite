const express = require("express");
const newsRouter = express.Router();

const newsController = require("../controllers/newsController");

newsRouter.get("/", newsController.getAllNews);

// newsRouter.post("/:id", newsController.singleNews);

// newsRouter.post("", async (req, res) => {
//   let search = req.body.search;
//   try {
//     const newsAPI = await axios.get(
//       `https://raddy.dev/wp-json/wp/v2/posts?search=${search}`
//     );
//     res.render("newsSearch", { articles: newsAPI.data });
//   } catch (err) {
//     if (err.response) {
//       res.render("newsSearch", { articles: null });
//       console.log(err.response.data);
//       console.log(err.response.status);
//       console.log(err.response.headers);
//     } else if (err.requiest) {
//       res.render("newsSearch", { articles: null });
//       console.log(err.requiest);
//     } else {
//       res.render("newsSearch", { articles: null });
//       console.error("Error", err.message);
//     }
//   }
// });

module.exports = newsRouter;
