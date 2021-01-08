const db = require("../../../DbConfiguration");

const addGallery = async (_, { path, gallery }) => {
  const galleryObj = JSON.parse(gallery);
  galleryObj.id = db.ref().push().key;
  db.ref(path + "/" + galleryObj.id).set(galleryObj);
  return galleryObj;
};
module.exports = addGallery;
