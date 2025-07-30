import React, { useState } from "react";

function BookForm() {
  const [formData, setFormData] = useState({
    Title: "",
    Author: "",
    Genre: "",
    YearReleased: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div>
      <h1>New Book</h1>
      {submitted && <p>data sent!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="Title" value={formData.Title} onChange={handleChange} />
        </div>
        <div>
          <label>Author</label>
          <input type="text" name="Author" value={formData.Author} onChange={handleChange} />
        </div>
        <div>
          <label>Genre</label>
          <input type="text" name="Genre" value={formData.Genre} onChange={handleChange} />
        </div>
        <div>
          <label>Year Published</label>
          <input type="text" name="YearReleased" value={formData.YearReleased} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookForm;
