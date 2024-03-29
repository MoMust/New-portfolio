import React from 'react'
import "./ErrorMessage/errorMessage.css";
import "./ContactForm/ContactForm.css"
const Input = (props) => {

  return (
    <div className="input-container mb-3">
      <div>
        <label className="" style={{ fontSize: "20px" }}>
          {props.label}
        </label>
      </div>
      <div className='any'>
        <input
        id={props.id}
          type={props.type}
          className="inputName"
          name={props.name}
          value={props.value}
          onChange={(e) =>
            props.setToSend({
              ...props.toSend,
              [e.target.name]: e.target.value,
            })
          }
          required={true}
          pattern={props.pattern}
          onBlur={props.handleFocus}
          focused={props.focused}
        ></input>
        <span className="errorMessage pt-3" style={{ fontSize: "13px" }}>
          {props.errorMessage}
        </span>
      </div>
    </div>
  );
}

export default Input