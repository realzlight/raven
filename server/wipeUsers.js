import 'dotenv/config'
import mongoose from 'mongoose'
import User from './models/User.js'

const wipe = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')

    const result = await User.deleteMany({})
    console.log(`Wiped ${result.deletedCount} users`)

    await mongoose.disconnect()
    process.exit(0)
  } catch (err) {
    console.error('Wipe failed:', err)
    process.exit(1)
  }
}

wipe()
