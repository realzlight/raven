import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      default: '',
      maxlength: 15,
    },
    username: {
      type: String,
      default: '',
      unique: true,
      sparse: true,
      lowercase: true,
      maxlength: 15,
    },
    avatar: {
      type: String,
      default: '',
    },
    isProfileComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User
