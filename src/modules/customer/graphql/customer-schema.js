import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs/models/customers.js"; // Check path
import customerResolvers from "./resolvers/customer-resolvers.js";
import mutations from "./typeDefs/mutations/customer-mutation.js";
import query from "./typeDefs/queries/customer-queries.js";
import { makeExecutableSchema } from "@graphql-tools/schema";

const schema = new makeExecutableSchema({
    typeDefs: [typeDefs, mutations, query],
    resolvers: customerResolvers,
});


export default schema;
