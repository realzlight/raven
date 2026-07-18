import express from 'express'
import passport from '../configs/passport.js'
import verifyAuth from '../middlewares/verifyAuth.js'
import { googleCallback, logout, getMe, updateProfile } from '../controllers/authController.js'

const router = express.Router()

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  })
)

router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL}/auth`,
  }),
  googleCallback
)

router.post('/logout', logout)
router.get('/me', verifyAuth, getMe)
router.post('/complete-profile', verifyAuth, updateProfile)

export default router
