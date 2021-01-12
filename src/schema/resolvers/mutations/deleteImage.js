const db = require("../../../DbConfiguration");

const deleteImage = async (_, { path, id }) => {
  db.ref(path + id)
    .remove()
    .then(() => {
      return true;
    })
    .catch((error) => {
      return error;
    });
};

module.exports = deleteImage;
