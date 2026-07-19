import User from '../models/User.js'

export const updateInitials = async (req, res) => {
  try {
    const { name, username } = req.body
    const userId = req.user._id

    const user = await User.findById(userId)

    if (user.isProfileComplete) {
      return res.status(403).json({ error: 'Profile already complete' })
    }

    if (!name || !username) {
      return res.status(400).json({ error: 'Name and username are required' })
    }

    const existingUsername = await User.findOne({
      username: username.toLowerCase(),
      _id: { $ne: userId },
    })

    if (existingUsername) {
      return res.status(400).json({ error: 'Username already taken' })
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        name,
        username: username.toLowerCase(),
        isProfileComplete: true,
      },
      { new: true }
    )

    return res.status(200).json({
      message: 'Profile completed',
      user: {
        id: updatedUser._id,
        email: updatedUser.email,
        name: updatedUser.name,
        username: updatedUser.username,
        isProfileComplete: updatedUser.isProfileComplete,
      },
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Failed to update initials' })
  }
}

