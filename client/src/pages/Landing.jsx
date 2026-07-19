import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../lib/axios.js'
import CardNav from '../components/CardNav.jsx'

export default function Landing() {
  const navigate = useNavigate()
  

    
  

const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#2F293A", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];
}
  return (
    <CardNav
      logo={logo}
      logoAlt="RAVEN"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
  theme="dark"
/>




)






}
