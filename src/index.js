const { GraphQLServer } = require("graphql-yoga");
const dotenv = require("dotenv");
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");

dotenv.config();

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log("Server is running on localhost:4000"));
