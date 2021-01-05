const db = require("../../DbConfiguration");
const getImages = require("../resolvers/queries/getImage");
const addImage = require("../resolvers/mutations/addImage");
const updateImage = require("../resolvers/mutations/addImage");

const resolvers = {
  Query: {
    getImages,
  },
  Mutation: {
    addImage,
    updateImage,
  },
};

module.exports = resolvers;
