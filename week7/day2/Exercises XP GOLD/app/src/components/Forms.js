import React, { useState } from "react";

function Forms() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [description, setDescription] = useState(
    "The content of a textarea goes in the value attribute"
  );
  const [selectedCar, setSelectedCar] = useState("Volvo");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "age") {
      setAge(value);
      if (value && isNaN(value)) {
        setErrorMessage("Your age must be a number");
      } else {
        setErrorMessage("");
      }
    }
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    if (age && isNaN(age)) {
      alert("Your age must be a number");
    } else {
      alert(`You are submitting ${username}`);
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
  };

  let header = null;
  if (username) {
    header = <h1>Hello {username} {age}</h1>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      {header || <h1>Hello</h1>}
      <form onSubmit={mySubmitHandler}>
        <p>Enter your name:</p>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <br />
        <p>Enter your age:</p>
        <input
          type="text"
          name="age"
          value={age}
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "red" }}>{errorMessage}</span>
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <br /><br />
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        rows="4"
        cols="40"
      />
      <br /><br />

      <select value={selectedCar} onChange={handleCarChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </div>
  );
}

export default Forms;
