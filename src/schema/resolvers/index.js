const db = require("../../DbConfiguration");

const resolvers = {
  Query: {
    getImages: async (_, { path }) => {
      let imageArray = [];
      db.ref(path).on("value", (snapshot) => {
        const data = snapshot.val();
        imageArray = Object.values(data);
      });
      return imageArray;
    },
  },
  Mutation: {
    addImage: async (_, { path, description, index, url }) => {
      const newImage = {
        id: url,
        date: Date.now(),
        description: description,
        index: index,
      };
      db.ref(path + url).set(newImage);
      return newImage;
    },
  },
};

module.exports = resolvers;
