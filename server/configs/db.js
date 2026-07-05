import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)

    console.log(`MongoDB connected: ${conn.connection.host}`)

    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB runtime error: ${err.message}`)
    })

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected')
    })

    process.on('SIGINT', async () => {
      await mongoose.connection.close()
      console.log('MongoDB connection closed on app termination')
      process.exit(0)
    })
  } catch (err) {
    console.error(`MongoDB connection error: ${err.message}`)
    process.exit(1)
  }
}

export default connectDB
