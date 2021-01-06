const db = require("../../DbConfiguration");
const getImages = require("../resolvers/queries/getImage");
const addImage = require("../resolvers/mutations/addImage");
const updateImage = require("../resolvers/mutations/updateImage");
const deleteImage = require("../resolvers/mutations/deleteImage");

const resolvers = {
  Query: {
    getImages,
  },
  Mutation: {
    addImage,
    updateImage,
    deleteImage,
  },
};

module.exports = resolvers;
