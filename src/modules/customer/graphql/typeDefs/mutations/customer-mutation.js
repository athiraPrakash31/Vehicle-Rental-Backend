import { gql } from 'apollo-server-express';

const mutations = gql`
  type Mutation {
    createCustomer(input: CreateCustomerInput!): Customer
  }
`;

export default mutations;
