const db = require("../../../DbConfiguration");

const deleteGallery = async (_, { path, id }) => {
  db.ref(path + id)
    .remove()
    .then(() => {
      // deletes images of gallery
      db.ref("images/Galleries/" + id).remove();
      return true;
    })
    .catch((error) => {
      return error;
    });
};

module.exports = deleteGallery;
