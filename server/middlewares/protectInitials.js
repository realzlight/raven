export const protectInitials = (req, res, next) => {
  if (req.user.isProfileComplete) {
    return res.status(403).json({ error: 'Initials already set, one-time only' })
  }
  next()
}

