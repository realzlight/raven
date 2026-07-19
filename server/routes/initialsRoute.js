import express from 'express'
import { verifyAuth } from '../middlewares/verifyAuth.js'
import { protectInitials } from '../middlewares/protectInitials.js'
import { updateInitials } from '../controllers/initialsController.js'

const router = express.Router()

router.post('/initials', verifyAuth, protectInitials, updateInitials)

router.get('/me', verifyAuth, (req, res) => {
  res.status(200).json({
    id: req.user._id,
    name: req.user.name,
    username: req.user.username,
    isProfileComplete: req.user.isProfileComplete,
  })
})

export default router

