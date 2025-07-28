import React, { Component } from "react";
import "./Exercise.css";
import reactpic from "./reactpic.png";

// PART II: Inline style for h1
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {/* PART I & II: Styled H1 */}
        <h1 style={style_header}>This is a Header</h1>

        {/* PART III: Styled paragraph via CSS */}
        <p className="para">This is a Paragraph</p>

        {/* Link */}
        <a href="https://example.com" target="_blank" rel="noreferrer">
          This is a Link
        </a>

        {/* Form */}
        <h3><strong>This is a Form:</strong></h3>
        <form>
          <label>Enter your name: </label><br />
          <input type="text" />
          <button type="submit">Submit</button>
        </form>

        {/* Image */}
        <h4><strong>Here is an Image:</strong></h4>
        <img src={reactpic} alt="React logo" width="600" />

        {/* List */}
        <h4><strong>This is a List:</strong></h4>
        <ul style={{ listStyleType: "disc", display: "inline-block", textAlign: "left" }}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;

