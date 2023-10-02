const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv');

const contactRoutes = require('./routes/contactRoutes');
const connectDb = require('./Mongo/dil');

dotenv.config();

const app = express();
const port =  5001;



//mongodb connect
connectDb();

app.use(express.json());
app.use('/api/contacts', contactRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
