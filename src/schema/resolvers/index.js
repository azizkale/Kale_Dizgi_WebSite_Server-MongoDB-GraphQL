const db = require("../../DbConfiguration");
const getImages = require("../resolvers/queries/getImage");
const addImage = require("../resolvers/mutations/addImage");

const resolvers = {
  Query: {
    getImages,
  },
  Mutation: {
    addImage,
  },
};

module.exports = resolvers;
