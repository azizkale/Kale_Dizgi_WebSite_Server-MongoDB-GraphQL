const db = require("../../../DbConfiguration");

const addImage = async (_, { path, image }) => {
  const imageObj = JSON.parse(image);
  imageObj.id = db.ref().push().key;
  db.ref(path + "/" + imageObj.id).set(imageObj);
  console.log(image);

  console.log(imageObj);
  return imageObj;
};
module.exports = addImage;
