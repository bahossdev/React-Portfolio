import { useState } from "react";

function Contact() {
  // State variables for name, email, message, error messages, and success message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');

  // Function to check for errors in input fields
  function checkForError(text, inputName) {
    // Reset success message
    setSuccess('');
    // Check if field is empty
    if (text.trim().length === 0) {
      setError({ ...error, [inputName]: `${inputName} field can't be empty` });
    } else {
      // Clear error if field is not empty
      setError({ ...error, [inputName]: '' });
    }
    // Check for email format if input is email
    if (inputName === "email") {
      const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      const isValidEmail = regex.test(email);
      if (!isValidEmail) {
        setError({ ...error, email: 'Please enter a valid email' });
        return;
      }
    }
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Display success message and reset input fields
    setSuccess('Email sent successfully! 🙂');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div>
      <h2 className="typewriter">Contact Me</h2>
      {/* Contact form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onBlur={(e) => checkForError(e.target.value, e.target.name)}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* Error message for name field */}
        <div className="error">{error.name}</div>
        {/* Email field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onBlur={(e) => checkForError(e.target.value, e.target.name)}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Error message for email field */}
        <div className="error">{error.email}</div>
        {/* Message field */}
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onBlur={(e) => checkForError(e.target.value, e.target.name)}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        {/* Error message for message field */}
        <div className="error">{error.message}</div>
        {/* Submit button */}
        <button type="submit" disabled={(error.name || error.email || error.message) || (!name.length || !email.length || !message.length)}>
          {success || 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
