import React, { useState } from "react";
import "../css/contact.css";
import {validateEmail} from "../../utils/helpers";


function Contact() {

  const[email, setEmail] = useState("");
  const[name, setName] = useState("");
  const[message, setMessage] = useState("");
  const[errorMsg, setErrorMsg] = useState("");

  
  const handleInputChange = (event) => {
    const { target } = event;
    const inputName = target.name;
    const inputValue = target.value;

    if(inputName === "email") {
      setEmail(inputValue);
      if(inputValue === "") {
        setErrorMsg("Email field is required")
        return;
      }
    } else if (inputName ==="name") {
      setName(inputValue);
      if(inputValue === "") {
        setErrorMsg("Name field is required")
        return;
      }
    } else if (inputName === "message") {
      setMessage(inputValue);
      if(inputValue === "") {
        setErrorMsg("Message field is required")
        return;
      }
    };

    setErrorMsg("");
    
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();

    if(!name || !email || !message) {
      setErrorMsg("Fields are required");
      return;
    }

   
    if(!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address");
      return;
    };

    
    setEmail("");
    setName("");
    setMessage("");
    setErrorMsg("");
  };

  return (
      <div className="container contactForm">
      <h4>Contact Me</h4>
      <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
                <input 
                placeholder="Name" 
                id="first_name" 
                type="text" 
                className="validate"
                name="name"
                value={name}
                onChange={handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
                <input 
                placeholder="Email" 
                id="email" 
                type="email" 
                className="validate" 
                name="email"
                value={email}
                onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
              <i className="material-icons prefix">message</i>
                <textarea 
                placeholder="Your Message" 
                id="message" 
                className="materialize-textarea"
                name="message"
                value={message}
                onChange={handleInputChange}>

                </textarea>
              </div>
            </div>
            {errorMsg && (
            <div className="center-align">
              <p id="errorMsg">{errorMsg}</p>
            </div>
            )}
            <div className="center-align">
                <button 
                type="submit" 
                className="btn waves-effect pink darken-3"
                onClick={handleFormSubmit}
                >Submit
                <i className="material-icons right">send</i>
                </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Contact;