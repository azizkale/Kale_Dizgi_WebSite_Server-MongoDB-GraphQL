const db = require("../../../DbConfiguration");

const updateImage = async (_, { path, image }) => {
  const updatedImage = JSON.parse(image);

  db.ref(path).update(updatedImage);
  return updatedImage;
};

module.exports = updateImage;
