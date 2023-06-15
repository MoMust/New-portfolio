import React from 'react';

const TextInput = (props) => {

  return (
    <div className="wrap mb-4">
      <div>
        <label
          htmlFor="inputMessage"
          className="form-label"
          style={{ fontSize: "20px" }}
        >
          {props.label}
        </label>
      </div>
      <div>
        <textarea
        id={props.id}
          className="inputEmail"
          style={{ maxHeight: "250px" }}
          name={props.name}
          value={props.value}
          onChange={(e) =>
            props.setToSend({
              ...props.toSend,
              [e.target.name]: e.target.value,
            })
          }
          required={true}
          onBlur={props.handleFocus}
          onFocus={props.onFocus}
          focused={props.focused}
          pattern={props.pattern}
        ></textarea>
        <span className="errorMessage" style={{ fontSize: "16px" }}>
          {props.errorMessage}
        </span>
      </div>
    </div>
  );
}

export default TextInput