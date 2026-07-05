import jwt from 'jsonwebtoken'

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

export const googleCallback = (req, res) => {
  const user = req.user
  const token = generateToken(user._id)

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })

  if (user.isProfileComplete) {
    return res.redirect(`${process.env.FRONTEND_URL}/home`)
  }

  return res.redirect(`${process.env.FRONTEND_URL}/initials`)
}

export const logout = (req, res) => {
  res.clearCookie('token')
  return res.status(200).json({ message: 'Logged out' })
}
