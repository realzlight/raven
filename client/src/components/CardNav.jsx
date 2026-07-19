import { useState } from 'react';
import '../styles/CardNav.css';

const CardNav = ({
  logoText = 'RAVEN',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

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
            <span className="logo-text">{logoText}</span>
          </div>

          <button type="button" className="card-nav-cta-button">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
