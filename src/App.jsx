
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
// Pages

import Landing from './pages/Landing.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Chats from './pages/Chats.jsx';
import Search from './pages/Search.jsx';
import Auth from './pages/Auth.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />

        {/* Protected Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/search" element={<Search />} />
        <Route path="/auth" element={<Auth/>}/>
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
