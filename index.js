const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv');

const contactRoutes = require('./routes/contactRoutes');
const UserRoutes = require('./routes/userRoutes')
const connectDb = require('./Mongo/dil');

dotenv.config();

const app = express();
const port =  5001;



//mongodb connect
connectDb();

app.use(express.json());
app.use('/api/contacts', contactRoutes);
app.use('/api/users',UserRoutes )
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
