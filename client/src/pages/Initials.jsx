import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../lib/axios.js'
import Aurora from '../components/Aurora.jsx'
import '../styles/initials.css'
import CardNav from '../components/CardNav.jsx'
import { useUser } from '../context/UserContext.jsx'

const USERNAME_RE = /^[a-z0-9_]{3,20}$/

export default function Initials() {
  const { refetchUser } = useUser()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [checking, setChecking] = useState(true)
  const usernameValid = USERNAME_RE.test(username)
  const canSubmit = name.trim().length > 0 && usernameValid && !loading
  useEffect(() => {
  const checkAccess = async () => {
    try {
      const res = await axios.get('/api/auth/me')
      if (res.data.isProfileComplete) {
        navigate('/home')
      } else {
        setChecking(false)
      }
    } catch (err) {
      navigate('/auth')
    }
  }
  checkAccess()
}, [navigate])
  const handleUsernameChange = (e) => {
    const clean = e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '')
    setUsername(clean)
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    setError('')
    try {
      await axios.post('/api/auth/complete-profile', { name: name.trim(), username })
      await refetchUser()
      navigate('/home')
    }
      catch (err) {
      const msg = err?.response?.data?.message || 'Something went wrong. Try again.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <Aurora
          colorStops={['#e9eee8', '#7d7c7e', '#101010']}
          blend={0.58}
          amplitude={1.0}
          speed={1.1}
        />
      </div>
    <CardNav logoText="Raven" />
      <div className="initials-page">
        <div className="initials-content">
          <p className="initials-step">Step 1 of 2</p>
          <h1 className="initials-title">Create your profile</h1>
          <p className="initials-desc">This information will be visible on your public profile.</p>

          <form className="initials-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                type="text"
                placeholder="Jane Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                autoFocus
                disabled={loading}
              />
            </div>

            <div className="field">
              <label htmlFor="username">Username</label>
              <div className="username-input-wrap">
                <span className="username-prefix">@</span>
                <input
                  id="username"
                  type="text"
                  placeholder="janesmith"
                  value={username}
                  onChange={handleUsernameChange}
                  maxLength={20}
                  disabled={loading}
                />
                {username.length > 0 && (
                  <span className={`username-status ${usernameValid ? 'valid' : 'invalid'}`} />
                )}
              </div>
              <p className="field-hint">Lowercase letters, numbers, and underscores. 3–20 characters.</p>
            </div>

            {error && <p className="initials-error">{error}</p>}

            <button type="submit" className="initials-submit" disabled={!canSubmit}>
              {loading ? 'Saving...' : 'Continue'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
