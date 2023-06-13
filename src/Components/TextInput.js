import React, {useState} from 'react'

const TextInput = (props) => {

    const [focused, setFocused] = useState(false);

     const handleFocus = (e) => {
       setFocused(true);
     };

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
          onBlur={handleFocus}
          onFocus={() => setFocused(true)}
          focused={focused.toString()}
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