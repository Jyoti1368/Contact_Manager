const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.Mongo_Url)
    console.log('Database connected:', connect.connection.host, connect.connection.name)
  } catch (err) {
    console.error('Error occurred:', err.message)
    process.exit(1)
  }
}

module.exports = connectDb
