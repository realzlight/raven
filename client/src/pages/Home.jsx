import { useNavigate } from 'react-router-dom'
import axios from '../lib/axios.js'
import { useUser } from '../context/UserContext.jsx'
import LoadingSpinner from '../components/LoadingSpinner.jsx'

export default function Home() {
  const navigate = useNavigate()
  const { user, loading } = useUser()

  if (loading) return <LoadingSpinner/>
  if (!user) {
    navigate('/auth', { replace: true })
    return <LoadingSpinner/>
  }

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
      <p>You're logged in {user.username}.</p>
      <button onClick={handleLogout} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Logout
      </button>
    </div>
  )
}
