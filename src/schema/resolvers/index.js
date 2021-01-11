const db = require("../../DbConfiguration");
const getImages = require("../resolvers/queries/getImage");
const getGalleryInfos = require("../resolvers/queries/getGalleryInfos");
const getUsers = require("../resolvers/queries/getUsers");
const addImage = require("../resolvers/mutations/addImage");
const addGallery = require("../resolvers/mutations/addGallery");
const updateImage = require("../resolvers/mutations/updateImage");
const deleteImage = require("../resolvers/mutations/deleteImage");
const deleteGallery = require("../resolvers/mutations/deleteGallery");

const resolvers = {
  Query: {
    getImages,
    getGalleryInfos,
    getUsers,
  },
  Mutation: {
    addImage,
    updateImage,
    deleteImage,
    addGallery,
    deleteGallery,
  },
};

module.exports = resolvers;
