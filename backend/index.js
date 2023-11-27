const connectToMongo = require('./db');
const express = require('express');
const app = express()
const port = 5000

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

const start = async () => {
    try {
      await connectToMongo();
      app.listen(port, () => {
        console.log(`iNotebook backend connected to ${port}`);
      });
    } catch (error) {
      console.log(error);
    }
};
start();