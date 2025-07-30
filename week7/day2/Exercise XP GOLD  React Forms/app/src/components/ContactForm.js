import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ firstName: "", lastName: "", phone: "", email: "" });
    setSubmitted(false);
  };

  return (
    <div style={{ backgroundColor: "#d3d3d3", padding: "20px", width: "300px", borderRadius: "25px" }}>
      {!submitted ? (
        <>
          <h1>Welcome!</h1>
          <p>Please provide your information below.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" name="firstName" value={form.firstName} onChange={handleChange} /><br />
            <input type="text" placeholder="Last Name" name="lastName" value={form.lastName} onChange={handleChange} /><br />
            <input type="text" placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange} /><br />
            <input type="text" placeholder="Email Address" name="email" value={form.email} onChange={handleChange} /><br />
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <>
          <h3>{form.lastName}, {form.firstName}</h3>
          <p>{form.phone} | {form.email}</p>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}

export default ContactForm;
