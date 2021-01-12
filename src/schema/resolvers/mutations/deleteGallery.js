const db = require("../../../DbConfiguration");

const deleteGallery = async (_, { path, id }) => {
  return db
    .ref(path + id)
    .remove()
    .then(() => {
      return true;
    })
    .catch((error) => {
      return error;
    });
};

module.exports = deleteGallery;
