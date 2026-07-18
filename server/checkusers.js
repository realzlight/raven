import 'dotenv/config'
import mongoose from 'mongoose'
import User from './models/User.js'

await mongoose.connect(process.env.MONGODB_URI)
const users = await User.find()
console.log(JSON.stringify(users, null, 2))
await mongoose.disconnect()
