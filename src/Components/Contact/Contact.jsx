import React from "react";
import ContactForm from "./ContactForm/ContactForm.jsx";
import "./ContactForm/ContactForm.css";
import "./Contact.css"
function Contact() {
  return (
    <div className="body-class-contact-form" id="contact">
      <div className="form-container">
        <div className="d-flex flex-column justify-content-center">
          <h1>Get in touch</h1>
          <p>Do you want to work with me? Go ahead and send me a message.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
