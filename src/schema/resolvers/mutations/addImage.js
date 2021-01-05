const db = require("../../../DbConfiguration");

const addImage = async (_, { path, description, index, url }) => {
  const newImage = {
    id: url,
    date: Date.now(),
    description: description,
    index: index,
  };
  db.ref(path + url).set(newImage);
  return newImage;
};
module.exports = addImage;
