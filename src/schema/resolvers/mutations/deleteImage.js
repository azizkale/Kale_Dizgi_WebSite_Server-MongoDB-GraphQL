const db = require("../../../DbConfiguration");

const deleteImage = async (_, { path, url }) => {
  return db
    .ref(path + url)
    .remove()
    .then(() => {
      return "Data successfuly deleted";
    })
    .catch((error) => {
      return error;
    });
};

module.exports = deleteImage;
