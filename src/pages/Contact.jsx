// import { useState } from "react";
// import emailjs from "emailjs-com";

function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <form className="contact-form"
      // onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            // value={formData.message}
            // onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {/* <p>{response}</p> */}
    </div>
  );
}

export default Contact;
