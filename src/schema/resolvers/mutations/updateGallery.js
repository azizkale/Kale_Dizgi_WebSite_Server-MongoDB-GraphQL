const db = require("../../../DbConfiguration");

const updateGallery = async (_, { path, gallery }) => {
  const updatedGallery = JSON.parse(gallery);

  db.ref(path).update(updatedGallery);
  return updatedGallery;
};

module.exports = updateGallery;
