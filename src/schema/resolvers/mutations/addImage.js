const db = require("../../../DbConfiguration");

const addImage = async (_, { path, image }) => {
  console.log(image);
  console.log(JSON.parse(image));
  // const newImage = {
  //   id: url,
  //   date: Date.now(),
  //   description: description,
  //   index: index,
  // };
  // db.ref(path + "/" + url).set(newImage);
  // return newImage;
};
module.exports = addImage;
