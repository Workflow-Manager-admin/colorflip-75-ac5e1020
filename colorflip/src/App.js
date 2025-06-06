import React, { useState } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function getRandomHexColor() {
  /**
   * Returns a random hex color string.
   */
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return '#' + ('000000' + hex).slice(-6).toUpperCase();
}

// Predefined list of visually pleasant colors (HEX)
const COLOR_LIST = [
  '#E87A41', // Kavia orange
  '#4caf50', // Accent green
  '#00FFFF', // Cyan/light
  '#00008B', // Deep Blue
  '#FFC107', // Amber
  '#FF5722', // Deep Orange
  '#2196F3', // Blue
  '#A259F7', // Violet
  '#FF1493', // Deep Pink
  '#1DE9B6', // Teal Light
  '#ffffff', // White
];

// PUBLIC_INTERFACE
const ColorFlip = () => {
  /**
   * Main container component for ColorFlip app.
   * Provides the color flip button, shows the current color, and sets background color.
   * UI is centered and visually simple per project requirements.
   */
  // Start with a random color from the list
  const [color, setColor] = useState(COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)]);

  // Flip color to a new, random color (from the list OR generated completely randomly)
  const handleFlip = () => {
    // 80%: choose from list; 20%: random hex
    if (Math.random() < 0.8) {
      let next;
      do {
        next = COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)];
      } while (next === color && COLOR_LIST.length > 1);
      setColor(next);
    } else {
      setColor(getRandomHexColor());
    }
  };

  // Inline style for filling background of the whole page
  React.useEffect(() => {
    document.body.style.backgroundColor = color;
    // Cleanup
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [color]);

  return (
    <div className="app" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent' // background is handled by document.body
    }}>
      <main>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 className="title" style={{color: '#222', marginBottom: '20px', marginTop: '32px'}}>ColorFlip</h1>

          <button
            className="btn btn-large"
            style={{
              backgroundColor: '#1976D2', // Blue button background for contrast and accessibility
              color: '#fff',              // White text ensures readability
              borderRadius: 6,
              marginBottom: '26px',
              minWidth: '140px',
              fontWeight: 500,
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.09)'
            }}
            onClick={handleFlip}
            aria-label="Flip Color"
          >
            Flip Color
          </button>

          <div
            aria-label="Current Color"
            style={{
              fontFamily: 'monospace',
              fontSize: '1.6rem',
              padding: '16px 32px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.9)',
              color: '#222',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
            }}
          >
            {color}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ColorFlip;
