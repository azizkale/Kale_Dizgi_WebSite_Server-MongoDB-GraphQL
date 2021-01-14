const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");

dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING2, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() =>
  console.log(`Server started, listening on port  for incoming requests.`)
);
