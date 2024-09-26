// src/modules/customer/graphql/resolvers/customerResolvers.js
import customerController from '../../controller/customerController.js';

const customerResolvers = {
  Query: {
    customers: async () => {
      return await customerController.getAllCustomers();
    },
  },
  
  Mutation: {
    createCustomer: async (_, { input }) => {
      const { username, email, password } = input;
      return await customerController.createCustomer({ username, email, password });
    },
  },
};

export default customerResolvers;
