import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../lib/axios.js'
import CardNav from '../components/CardNav.jsx'
import DotField from '../components/DotField.jsx';
import DynamicNotch from '../components/DynamicNotch.jsx'
import '../styles/landing.css'
import Aurora from '../components/Aurora.jsx'
export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing-page">

<div className="bg-layer">
  <Aurora
    colorStops={["#e9eee8","#7d7c7e","#101010"]}
    blend={0.58}
    amplitude={1.0}
    speed={1.1}
  />
  <DotField
    dotRadius={1}
    dotSpacing={14}
    bulgeStrength={67}
    glowRadius={100}
    sparkle={false}
    waveAmplitude={0}
    cursorRadius={500}
    cursorForce={0.1}
    bulgeOnly
    gradientFrom="#7b797b"
    gradientTo="#7b787d"
    glowColor="#120F17"
  />
</div>

      <div className="landing-nav">
        <CardNav logoText="RAVEN" />
      </div>

      <div className="landing-hero">
        <DynamicNotch/>
        <h1 className="hero-title">
          Ethereal Ascension<br/>Yours forever
        </h1>
        <p className="hero-subtext">
Everyone claims HTN. Few survive the face-off. Put your face on the line, battle for ascension, and let the cards decide who actually earns the title.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate('/home')}>
            Get Started
          </button>
          <button className="btn-secondary" onClick={() => navigate('/docs')}>
            Browse Docs
          </button>
        </div>
        <p className="hero-trust">DESTROY THE #1 WITH YOURS FACECARD</p>
      </div>

    </div>
  )
}
