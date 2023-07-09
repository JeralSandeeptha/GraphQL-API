require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./Schema/typeDefs');
const resolvers = require('./Schema/resolvers');

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
    await mongoose.connect(mongoUri)
    .then( () => {
        console.log('Database connected succesfully');
    })
    .catch( (error) => {
        console.log(error);
    });

    await server.listen(port)
        .then( ({url}) => {
            console.log(`Server is running at ${url}`);        
        })
        .catch( (error) => {
            console.log(error);
        });
}

startServer();