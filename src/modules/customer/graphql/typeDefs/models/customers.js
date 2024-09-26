import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Customer {
    id: ID!
    username: String!
    email: String!
    password: String
  }

  input CreateCustomerInput {
    username: String!
    email: String!
    password: String
  }
`;

export default typeDefs;
