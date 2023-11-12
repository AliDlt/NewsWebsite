const Parser = require("rss-parser");
const cheerio = require("cheerio");

exports.nytimes = async () => {
  try {
    let parser = new Parser();
    const feed = await parser.parseURL(
      "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/section/world/rss.xml"
    );

    if (feed.items) {
      const newsData = feed.items.map((item) => {
        return {
          title: item.title,
          url: item.link,
          publishDate: item.isoDate,
          description: item.content,
          source: item.creator,
        };
      });
      return newsData;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.aljazeera = async () => {
  try {
    let parser = new Parser();
    const feed = await parser.parseURL(
      "https://www.aljazeera.com/xml/rss/all.xml"
    );

    if (feed.items) {
      const newsData = feed.items.map((item) => {
        return {
          title: item.title,
          url: item.link,
          publishDate: item.isoDate,
          description: item.content,
          source: item.creator,
        };
      });
      return newsData;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.cbc = async () => {
  try {
    let parser = new Parser({
      customFields: {
        feed: ["cbc:authorName"],
        item: ["cbc:authorName"],
      },
    });
    const feed = await parser.parseURL(
      "https://www.cbc.ca/webfeed/rss/rss-topstories"
    );

    if (feed.items) {
      const newsData = feed.items.map((item) => {
        const $ = cheerio.load(item.content);
        const image = $("img").attr("src") || "";

        return {
          title: item.title,
          url: item.link,
          image,
          publishDate: item.isoDate,
          description: item.contentSnippet,
          source: item["cbc:authorName"] || "",
        };
      });

      return newsData;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.cnn = async () => {
  try {
    let parser = new Parser({
      customFields: {
        item: ["media:group"],
      },
    });
    const feed = await parser.parseURL("http://rss.cnn.com/rss/edition.rss");
    if (feed.items) {
      const newsData = feed.items
        .map((item) => {
          const image =
            item["media:group"] &&
            item["media:group"]["media:content"] &&
            item["media:group"]["media:content"][0].$.url
              ? item["media:group"]["media:content"][0].$.url
              : "";

          return {
            title: item.title,
            url: item.link,
            image: image,
            publishDate: item.isoDate,
            description: item.content,
            source: item["cbc:authorName"] || "",
          };
        })
        .filter((news) => {
          return Object.values(news).every((value) => value !== undefined);
        });
      return newsData;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
