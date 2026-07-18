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


export const getMe = async (req, res) => {
  return res.status(200).json({
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    username: req.user.username,
    isProfileComplete: req.user.isProfileComplete,
  })
}



export const updateProfile = async (req, res) => {
  try {
    const { name, username } = req.body
    if (!name?.trim() || !username?.trim()) {
      return res.status(400).json({ message: 'Name and username are required' })
    }

    const cleanUsername = username.trim().toLowerCase()
    const taken = await req.user.constructor.findOne({
      username: cleanUsername,
      _id: { $ne: req.user._id },
    })
    if (taken) return res.status(409).json({ message: 'Username already taken' })

    req.user.name = name.trim()
    req.user.username = cleanUsername
    req.user.isProfileComplete = true
    await req.user.save()

    return res.status(200).json({
      id: req.user._id,
      email: req.user.email,
      name: req.user.name,
      username: req.user.username,
      isProfileComplete: req.user.isProfileComplete,
    })
  } catch (err) {
    return res.status(500).json({ message: 'Server error' })
  }
}
