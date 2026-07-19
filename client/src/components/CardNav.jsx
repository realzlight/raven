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
      {/* Hidden SVG filter that bends/refracts the blurred background behind
          the nav — this is the piece that makes it read as glass instead of
          a flat blur. Rendered once, referenced via CSS. */}
      <svg className="liquid-glass-defs" aria-hidden="true">
        <filter id="liquid-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.06"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <nav className="card-nav">
        <div className="card-nav-refraction" />
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
