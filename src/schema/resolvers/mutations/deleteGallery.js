const db = require("../../../DbConfiguration");

const deleteGallery = async (_, { path, id }) => {
  return db
    .ref(path)
    .child(id)
    .remove()
    .then(() => {
      db.ref("images/Galleries/").child(id).remove();
      return true;
    })
    .catch((error) => {
      return eror;
    });
};

module.exports = deleteGallery;
