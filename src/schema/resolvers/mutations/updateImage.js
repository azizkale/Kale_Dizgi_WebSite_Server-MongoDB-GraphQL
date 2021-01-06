const db = require("../../../DbConfiguration");

const updateImage = async (_, { path, url, description, date, index }) => {
  const updatedImage = {
    date: date,
    description: description,
    index: index,
  };
  db.ref(path + url).update(updatedImage);
  return updatedImage;
};

module.exports = updateImage;
