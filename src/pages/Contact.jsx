import { useState } from "react";

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState('');

  function checkForError(text, inputName) {
    setSuccess('');
    if (text.trim().length === 0) {
      setError({ ...error, [inputName]: `${inputName} field can't be empty` });
    } else {
      console.log(inputName)
      setError({ ...error, [inputName]: '' })
    }
    if (inputName == "email") {
      const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
      const isValidEmail = regex.test(email);
      if (!isValidEmail) {
        setError({ ...error, email: 'Please enter a valid email' });
        return;
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSuccess('Email sent successfully! 🙂')
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div>
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
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
        <div>{error.name}</div>
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
        <div>{error.email}</div>
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
        <div>{error.message}</div>
        <button type="submit" disabled={(error.name || error.email || error.message) || (!name.length || !email.length || !message.length) ? true : ''}>{success || 'Send Message'}</button>
      </form>
    </div>
  );
}

export default Contact;
