import '../styles/auth.css'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../lib/axios.js'
import DynamicNotch from '../components/DynamicNotch.jsx'
import LoadingSpinner from '../components/LoadingSpinner.jsx'
import Dither from '../components/Dither.jsx'
import Aurora from '../components/Aurora.jsx'
import CardNav from '../components/CardNav.jsx'

export default function Login() {
  const navigate = useNavigate()  
  const [checking, setChecking] = useState(true)

  useEffect(() => {
  const checkAuth = async () => {
    try {
      await axios.get('/api/auth/me')
      navigate('/home')
    } catch (err) {
      setChecking(false)
    }
  }
  checkAuth()
}, [navigate])

  if (checking) return null	


  return (
    <div className="auth-page">
      

 <div className="bg-layer">

<Aurora
  colorStops={["#e9eee8","#7d7c7e","#101010"]}
  blend={0.58}
  amplitude={1.0}
  speed={1.1}
/>
  </div>

      <CardNav logoText="RAVEN" />

      <div className="auth-card">

        <div className="auth-header">
         <DynamicNotch/>
          <h1 className="auth-title">Prestigious Returns!</h1>
          <p className="auth-sub">we missed you, your presense is <span className="fire">Fire!</span></p>
        </div>

<div className="social-group">
  <button className="social-btn" onClick={() => window.location.href = 'http://localhost:5000/api/auth/google'}>
    <svg className="social-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M32.582 370.734C15.127 336.291 5.12 297.425 5.12 256c0-41.426 10.007-80.291 27.462-114.735C74.705 57.484 161.047 0 261.12 0c69.12 0 126.836 25.367 171.287 66.793l-73.31 73.309c-26.763-25.135-60.276-38.168-97.977-38.168-66.56 0-123.113 44.917-143.36 105.426-5.12 15.36-8.146 31.65-8.146 48.64 0 16.989 3.026 33.28 8.146 48.64l-.303.232h.303c20.247 60.51 76.8 105.426 143.36 105.426 34.443 0 63.534-9.31 86.341-24.67 27.23-18.152 45.382-45.148 51.433-77.032H261.12v-99.142h241.105c3.025 16.757 4.654 34.211 4.654 52.364 0 77.963-27.927 143.592-76.334 188.276-42.356 39.098-100.305 61.905-169.425 61.905-100.073 0-186.415-57.483-228.538-141.032v-.233z"/>
    </svg>
    Continue with Google
  </button>

  <button className="social-btn">
    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
   </svg>
    Continue with Apple
  </button>

  <button className="social-btn">
    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
    Continue with GitHub
  </button>
</div>
      </div>
            <p className="hero-trust">No SSO requirement is asked</p>
    </div>
  )
}
