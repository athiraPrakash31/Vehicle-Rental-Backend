import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pool from './config/db.js';  
import schema from './src/modules/customer/graphql/customer-schema.js';
import { ApolloServer } from 'apollo-server-express';

const VehicleServer = express();

// Middleware for CORS
VehicleServer.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

VehicleServer.use(express.json());

// Create an instance of ApolloServer
const server = new ApolloServer({
    schema,  // Use the created executable schema here
});

// Function to start the server
const startServer = async () => {
    // Start the Apollo server
    await server.start();
    
    // Apply the Apollo GraphQL middleware to the server
    server.applyMiddleware({ app: VehicleServer, path: '/graphql' });

    // Start listening on the specified port
    const PORT = process.env.PORT || 4000;  // Ensure correct port assignment
    VehicleServer.listen(PORT, () => {
        console.log(`Vehicle server listening on port http://localhost:${PORT}/graphql`);
    });
};

// Start the server
startServer();

// Basic route for testing
VehicleServer.get('/', (req, res) => {
    res.send('Welcome to Vehicle Booking Website!');
});
