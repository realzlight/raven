import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../lib/axios.js'
import CardNav from '../components/CardNav.jsx'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <CardNav logoText="Raven" />
  )
}
