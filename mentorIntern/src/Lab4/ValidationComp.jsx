import React, { useState, useEffect } from "react";

const ValidationComp = () => {
  const [passLength, setPassLength] = useState(false);
  const [passCaps, setPassCaps] = useState(false);
  const [userLength, setUserLength] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 


// for username validation
  const handleValidation = () => {
    if (username == "") {
      setUserLength(true);
    } else {
      setUserLength(false);
    }
  };

// for password validation
  const handlePassValidation = () => {
    if (password.charAt(0) !== password.charAt(0).toUpperCase()) {
      setPassCaps(true);
    } else {
      setPassCaps(false);
    }

    if (password.length < 8) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  };


// When user submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation();
    handlePassValidation();
  };




  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div className="form-container">
        <h1>Login Form</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div className="error-container">

        </div>

        {userLength && <p className="error-container" >Username required</p>}
       
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => handleUsername(e)}
        />
        {passCaps && (<p className="error-container"> First char must capital</p>)}
        {passLength && (<p className="error-container" >Password must have 8 Char</p>)}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        <input type="submit"  className="submit"/>
      </form>
    </div>
  );
};

export default ValidationComp;
