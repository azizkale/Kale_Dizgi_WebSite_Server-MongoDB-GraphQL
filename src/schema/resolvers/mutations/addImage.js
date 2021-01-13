const db = require("../../../DbConfiguration");
const Image = require("../../../DbModels/Images");

const addImage = async (
  _,
  { id, description, url, index, galleryId, date }
) => {
  // const img = JSON.parse(image);
  // const { id, description, url, index, galleryId, date } = img;
  const newImage = new Image({ id, description, url, index, galleryId, date });
  await newImage.save();
  return newImage;
  // const imageObj = JSON.parse(image);
  // imageObj.id = db.ref().push().key;
  // db.ref(path + "/" + imageObj.id).set(imageObj);

  // return imageObj;
};
module.exports = addImage;
