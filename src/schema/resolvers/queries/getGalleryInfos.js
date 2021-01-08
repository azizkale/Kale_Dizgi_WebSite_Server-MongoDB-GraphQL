const db = require("../../../DbConfiguration");

const getGalleryInfos = async (_, { path }) => {
  let galleryInfoArray = [];
  db.ref(path).on("value", (snapshot) => {
    const data = snapshot.val();
    galleryInfoArray = Object.values(data);
  });
  return galleryInfoArray;
};

module.exports = getGalleryInfos;
