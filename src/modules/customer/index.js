import { ApolloServer }  from "apollo-server-express";
import mutations from "./graphql/typeDefs/mutations/customer-mutation.js";
import queries from "./graphql/typeDefs/queries/customer-queries.js";
import typeDefs from "./graphql/typeDefs/models/customer.js";

const customer = ApolloServer({mutations,queries,typeDefs});

export default customer;