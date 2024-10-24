import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: danielwallace@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/daniel-wallace-71315b168/" target="_blank" rel="noopener noreferrer">Daniel Wallace</a></p>
      </section>
    );
  }
}
export default Contact;
