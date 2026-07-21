import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../lib/axios.js'

export default function Home() {
  const navigate = useNavigate()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('/api/auth/me')
        setChecking(false)
      } catch (err) {
        navigate('/auth', { replace: true })
      }
    }
    checkAuth()
  }, [navigate])

  if (checking) return null

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout')
      navigate('/auth')
    } catch (err) {
      console.error('Logout failed', err)
    }
  }

  return (
    <div style={{ padding: '2rem', color: '#fff', background: '#101010', minHeight: '100vh' }}>
      <h1>Home</h1>
      <p>You're logged in.</p>
      <button onClick={handleLogout} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Logout
      </button>
    </div>
  )
}
