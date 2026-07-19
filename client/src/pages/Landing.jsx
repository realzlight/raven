import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../lib/axios.js'
import CardNav from '../components/CardNav.jsx'
import DotField from '../components/DotField.jsx';
 import DynamicNotch from '../components/DynamicNotch.jsx'
import '../styles/landing.css'
export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing-page" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>

      {/* Background layer - absolute and behind everything */}
      <div className="bg-layer" style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        zIndex: 0 
      }}>
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
      
      
    <CardNav logoText="RAVEN" /> 
    
    

      <div style={{ position: 'relative', zIndex: 1 }} className="landing-hero">

        <DynamicNotch/> 
        <h1 style={{ color: 'white',marginTop: '40vh' }}>Impactfull</h1>
      </div>
      
    </div>
  )
}