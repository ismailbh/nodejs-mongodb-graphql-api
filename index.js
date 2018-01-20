import express from 'express';
// before adding graphql API
import graphqlHTTP from 'express-graphql';
// after adding graphql api
import mongoose from 'mongoose';

//Later
import schema from './graphql'

import seed from './config/seed'

const app = express();

/**
 * Connect to MongooDB
 */
mongoose.connect("mongodb://localhost/api_graphql");
const db = mongoose.connection;
db
  .on("error", err => {
    console.log("MongoDB connection error: ", err);
    process.exit(-1);
  })
  .once("open", conx => console.log("Connected to DB api_graphql"));

seed();

app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// GraphQL API
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})))

app.listen(3000, () => {
  console.log('GraphQL server running at port 3000...')
})
