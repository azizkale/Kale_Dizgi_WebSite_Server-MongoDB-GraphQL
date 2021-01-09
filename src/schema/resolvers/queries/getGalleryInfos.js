const db = require("../../../DbConfiguration");

const getGalleryInfos = async () => {
  let galleryInfoArray = [];
  db.ref("Galleries").on("value", (snapshot) => {
    const data = snapshot.val();
    galleryInfoArray = Object.values(data);
  });
  return galleryInfoArray;
};

module.exports = getGalleryInfos;
