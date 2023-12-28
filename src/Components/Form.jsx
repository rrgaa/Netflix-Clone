import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang disubmit
    console.log("Nama:", name);
    console.log("Email:", email);
    console.log("Pesan:", message);
  };

  return (
    <div className="Form">
      <div className="form-container">
        <h2>Kontak Kami</h2>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Nama</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Pesan</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="form-submit-button">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
