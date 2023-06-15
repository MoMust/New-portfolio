import React, { useState } from "react";
import "./ContactForm.css";
import "../ErrorMessage/errorMessage.css";
import { Modal, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import Input from "../Input.jsx";
import TextInput from "../TextInput.jsx";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";

function ContactForm() {
  // State of form inputs
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  // States of modal successfully sent
  const [showModal, setShowModal] = useState(false);
  const [formValid, setFormValid] = useState(true);
  // State of input focus
  const [focused, setFocused] = useState(false);
  console.log(focused);
  const handleFocus = (e) => {
    setFocused(true);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (
      toSend.from_name === "" ||
      toSend.from_email === "" ||
      toSend.message === ""
    ) {
      setFormValid(false);
    } else if (!isValidEmail(toSend.from_email)) {
      // Check if email is valid
      setFormValid(true); // Set formValid to true to show the error message
    } else {
      setFormValid(true);
      setShowModal(true);
    }

    setToSend({
      from_name: "",
      from_email: "",
      message: "",
    });

    setFocused(false);

    emailjs
      .sendForm(
        "service_l4qox2l",
        "template_3tq24tb",
        e.target,
        "user_z0ZrJ8xdlfZwDeLvMXTFT"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };

  const handleChange = (e) => {
    setToSend((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <div className="container "></div>
      <form onSubmit={sendEmail}>
        <div className="form d-flex flex-column justify-content-center">
          <Input
            id="name"
            type="text"
            name="from_name"
            label="Namn"
            errorMessage="Ditt namn måste innehålla mellan 1-20 bokstäver och bör inte innehålla speciella tecken"
            value={toSend.from_name}
            onChange={handleChange}
            setToSend={setToSend}
            toSend={toSend}
            onBlur={handleFocus}
            focused={focused.toString()}
            onFocus={() => setFocused(true)}
            pattern="^[A-Za-z]{1,20}$"
            required
          />
          <Input
            id="email"
            type="email"
            name="from_email"
            label="Email"
            errorMessage="Din mail måste vara giltig"
            value={toSend.from_email}
            onChange={handleChange}
            setToSend={setToSend}
            toSend={toSend}
            onBlur={handleFocus}
            focused={focused.toString()}
            onFocus={() => setFocused(true)}
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            required
          />
          {!formValid && toSend.from_email !== "" && (
            <span className="errorMessage" style={{ fontSize: "16px" }}>
              Din mail måste vara giltig
            </span>
          )}
          <TextInput
            id="message"
            name="message"
            value={toSend.message}
            label="Ditt meddelande"
            errorMessage="Textfältet kan inte vara tomt"
            onBlur={handleFocus}
            onFocus={() => setFocused(true)}
            focused={focused.toString()}
            onChange={handleChange}
            setToSend={setToSend}
            toSend={toSend}
            required
          />
          <span className="errorMessage" style={{ fontSize: "16px" }}>
            Ditt namn måste innehålla mellan 1-20 bokstäver och bör inte
            innehålla speciella tecken
          </span>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ fontSize: "15px", width: "80px" }}
          data-bs-toggle="modal"
          data-bs-target="#sendSuccessModal"
        >
          Send
        </button>
      </form>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Body className="mt-3 d-flex flex-column justify-content-center">
          <div className="text-center">
            <p style={{ fontWeight: "600" }}>Your message has been sent!</p>
            <p style={{ fontWeight: "600" }}>
              I'll be in touch as soon as possible.
            </p>
            <MarkChatReadIcon
              style={{
                color: "rgb(78, 156, 115)",
                width: "50px",
                height: "50px",
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            variant="secondary"
            style={{
              backgroundColor: "rgb(58, 67, 125)",
              border: "none",
              fontWeight: "500",
            }}
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ContactForm;
