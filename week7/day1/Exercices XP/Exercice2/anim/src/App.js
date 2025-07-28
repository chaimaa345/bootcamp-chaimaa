import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

function App() {
  return (
    <div className="App">
      <h3>First Name: {user.firstName}</h3>
      <h3>Last Name: {user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>
  );
}

export default App;

