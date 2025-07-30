import React from 'react';
import Phone from './Exercise3/Phone';
import Color from './Exercise4/Color';

function App() {
  const showExercise = 3; // Change to 4 for Exercise 4

  return (
    <div className="App">
      {showExercise === 3 && <Phone />}
      {showExercise === 4 && <Color />}
    </div>
  );
}

export default App;


