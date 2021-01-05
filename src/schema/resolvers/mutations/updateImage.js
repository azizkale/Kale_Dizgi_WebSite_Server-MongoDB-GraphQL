const db = require("../../../DbConfiguration");

const updateImage = async (_, { path, url, description, date, index }) => {
  const updatedImage = {
    id: url,
    date: date,
    description: description,
    index: index,
  };
  db.ref(path + "/" + url).set(updatedImage);
  return updatedImage;
};

module.exports = updateImage;
