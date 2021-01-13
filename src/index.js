const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new GraphQLServer({ typeDefs, resolvers });

const port = 4002;
server.start({ port: port }, () =>
  console.log(`Server runs on http://localhost:${port}`)
);
