import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../lib/axios.js'
import CardNav from '../components/CardNav.jsx'
import DotField from '../components/DotField.jsx';
import DynamicNotch from '../components/CardNav.jsx'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing-page">

      <div className="bg-layer" style={{ width: '100%', height: '100%', position: 'relative' }}>
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
            <CardNav logoText="Raven" /> 
      


          <DynamicNotch/>
          
          <h1>Impactfull</h1>
          

      
      
      
      
      
      
      
    </div>
  )
}