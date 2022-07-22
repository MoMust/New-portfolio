import React from 'react'
import ContactForm from '../Components/ContactForm';
import '../Css/Fonts.css';
function Contact() {
    return (
        <div className='body-class-contact-form'>   
             <div className='form-container'>
                <h1>Contact</h1>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact
