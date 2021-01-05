const db = require("../../../DbConfiguration");

const updateImage = async (_, { path, id, description, date, index }) => {
  const updatedImage = {
    id: "152YkZ4a1Y3963nSiKzKlzqy36xOyayHE",
    date: "date",
    description: "description",
    index: 1111111,
  };
  db.ref("images/slider/152YkZ4a1Y3963nSiKzKlzqy36xOyayHE/").set(updatedImage);
  return updatedImage;
};

module.exports = updateImage;
