import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CardNav.css';

const CardNav = ({
  logoText = 'RAVEN',
  badgeText = 'Beta',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const goHome = () => {
    navigate('/');
  }

  return (
    <div className={`card-nav-container ${className}`}>
      <nav className="card-nav">
        <div className="card-nav-top">

          <div className="logo-container">
            <span onClick={goHome} className="logo-text cursor-pointer">{logoText}</span>
            {badgeText && <span className="nav-badge">{badgeText}</span>}
          </div>

          <div className="nav-right">
            <button
              type="button"
              className="card-nav-cta-button"
              onClick={() => navigate('/auth')}
            >
              Get Started
            </button>

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
          </div>

        </div>
      </nav>
    </div>
  );
};

export default CardNav;
