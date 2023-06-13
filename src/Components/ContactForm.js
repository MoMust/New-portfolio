import React, { useState } from "react";
import "../Css/ContactForm.css";
import "../Css/errorMessage.css";
import emailjs from "emailjs-com";
import Input from "./Input";
import TextInput from "./TextInput";
function ContactForm() {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  const sendEmail = (e) => {
    e.preventDefault();

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
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const modalSend = () => {
    const x = document.getElementById("myModal");
    const inputName = document.getElementById("name").value;
    const inputEmail = document.getElementById("email").value;
    const inputMessage = document.getElementById("message").value;

    if (inputName === "" || inputEmail === "" || inputMessage === "") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
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
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            required
          />
          <TextInput
            id="message"
            name="message"
            value={toSend.message}
            label="Ditt meddelande"
            errorMessage="Textfältet kan inte vara tomt"
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

      <div className="modal" id="sendSuccessModal">
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header"></div>

            <div className="modal-body">
              <p>
                {" "}
                Your message has been sent!
                <br />
                I'll be in touch as soon as possible.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
