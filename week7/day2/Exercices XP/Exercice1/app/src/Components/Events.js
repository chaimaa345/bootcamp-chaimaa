import React, { useState } from 'react';

function Events() {
  // Part III: State variable for toggle
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Part I: Click event
  const clickMe = () => {
    alert('I was clicked');
  };

  // Part II: Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`You pressed Enter and typed: ${e.target.value}`);
    }
  };

  // Part III: Toggle ON/OFF state
  const toggleButton = () => {
    setIsToggleOn(prev => !prev);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Part I: Button click */}
      <button onClick={clickMe}>Click Me</button>

      <br /><br />

      {/* Part II: Input with Enter key */}
      <input
        type="text"
        placeholder="Press the ENTER key!"
        onKeyDown={handleKeyDown}
        style={{ padding: '5px', width: '200px' }}
      />

      <br /><br />

      {/* Part III: Toggle ON/OFF */}
      <button onClick={toggleButton}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;


