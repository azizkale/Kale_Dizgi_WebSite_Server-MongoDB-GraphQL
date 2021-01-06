const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");

const server = new GraphQLServer({ typeDefs, resolvers });

const port = 4002;
server.start({ port: port }, () =>
  console.log(`Server runs on http://localhost:${port}`)
);
