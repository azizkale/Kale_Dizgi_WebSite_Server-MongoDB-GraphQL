const db = require("../../../DbConfiguration");

const getImages = async (_, { path }) => {
  let imageArray = [];
  db.ref(path).on("value", (snapshot) => {
    const data = snapshot.val();
    imageArray = Object.values(data);
  });
  return imageArray;
};

module.exports = getImages;
