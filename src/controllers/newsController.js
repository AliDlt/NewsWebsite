const onlineNews = require("../services/newsSources.js");

exports.home = async (req, res) => {
  try {
    res.render("home");
  } catch (err) {}
};

exports.nytimes = async (req, res) => {
  try {
    const news = await onlineNews.nytimes();
    res.render("news", { allNews: news });
  } catch (err) {
    console.log(err);
  }
};

exports.aljazeera = async (req, res) => {
  try {
    const news = await onlineNews.aljazeera();
    res.render("news", { allNews: news });
  } catch (err) {
    console.log(err);
  }
};

exports.cbc = async (req, res) => {
  try {
    const news = await onlineNews.cbc();
    res.render("news", { allNews: news });
  } catch (err) {
    console.log(err);
  }
};

exports.cnn = async (req, res) => {
  try {
    const news = await onlineNews.cnn();
    res.render("news", { allNews: news });
  } catch (err) {
    console.log(err);
  }
};

// exports.getAllNews = async (req, res) => {
//   try {
//     // Filter out duplicate titles
//     const filteredDataWithoutDuplicates =
//       manipulateData.removeDuplicateTitles(news);

//     const filteredData = filteredDataWithoutDuplicates;

//     res.render("news", { allNews: filteredData });
//   } catch (err) {}
// };

exports.newsSingle = async (req, res) => {
  const { title, description, url, image, date, source } = req.body;
  try {
    res.render("newsSingle", { title, description, url, image, date, source });
  } catch (err) {}
};
