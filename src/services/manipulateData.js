function removeDuplicateTitles(data) {
  var uniqueTitles = new Set();
  var uniqueArray = [];

  for (var i = 0; i < data.length; i++) {
    if (!uniqueTitles.has(data[i].title)) {
      uniqueTitles.add(data[i].title);
      uniqueArray.push(data[i]);
    }
  }
  return uniqueArray;
}

module.exports = {
  removeDuplicateTitles,
};
