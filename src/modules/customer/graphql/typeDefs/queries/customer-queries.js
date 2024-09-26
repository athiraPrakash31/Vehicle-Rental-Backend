import { gql } from "apollo-server-express";

const query = gql`
  type Query {
    customers: [Customer],
    customer(id: ID!): Customer
  }
`;

export default query;
