import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. import from react-router-dom
import '../styles/CardNav.css';

const CardNav = ({
  logoText = 'RAVEN',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate() // 2. hook must be INSIDE component

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const goHome = () => {
    navigate('/'); // 3. use '/' for home, not full url
  }

  return (
    <div className={`card-nav-container ${className}`}>
      <nav className="card-nav">
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
              }
            }}
            role="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            tabIndex={0}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            <span onClick={goHome} className="logo-text cursor-pointer">{logoText}</span>
          </div>

          <button 
            type="button" 
            className="card-nav-cta-button"
            onClick={() => navigate('/get-started')} // example
          >
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default CardNav;