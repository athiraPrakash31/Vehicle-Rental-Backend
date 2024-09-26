
// src/modules/customer/controllers/customerController.js
import customerRepository from '../repository/customerRepository.js';

const customerController = {
  getAllCustomers: async () => {
    return await customerRepository.getAllCustomers();
  },

  createCustomer: async ({ username, email, password }) => {
    return await customerRepository.createCustomer(username, email, password);
  }
};

export default customerController;