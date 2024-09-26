
// src/modules/customer/repository/customerRepository.js
import pool from '../../../../config/db.js';

const customerRepository = {
  createCustomer: async (username, email, password) => {
    const { rows } = await pool.query(
      'INSERT INTO customer (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    );
    return rows[0];
  },

  getAllCustomers: async () => {
    const { rows } = await pool.query('SELECT * FROM customer');
    return rows;
  },
};

export default customerRepository;