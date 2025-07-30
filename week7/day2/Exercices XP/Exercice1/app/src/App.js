import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events'; // Corrected import

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  const showExercise = 2; // Change to 2 to show Events

  return (
    <div className="App">
      {showExercise === 1 && <Car car={carinfo} />}
      {showExercise === 2 && <Events />}
    </div>
  );
}

export default App;





