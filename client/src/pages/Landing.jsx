import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../lib/axios.js'

export default function Landing() {
  const navigate = useNavigate()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    let cancelled = false

    axios.get('/api/auth/me')
      .then((res) => {
        if (cancelled) return
        navigate(res.data.isProfileComplete ? '/home' : '/initials', { replace: true })
      })
      .catch(() => {
        if (!cancelled) setChecking(false)
      })

    return () => { cancelled = true }
  }, [navigate])

  if (checking) return null

  return (
    <div className="text-center mt-20">
      <h1>Landing</h1>
    </div>
  )
}
