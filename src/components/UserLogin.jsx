import React, { useState } from "react";
import "../App.css";

const UserLogin = ({ setUser }) => {
  const [userName, setUserName] = useState();

  const handleUser = () => {
    if (!userName) return;
    localStorage.setItem("user", userName);
    setUser(userName);
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container  text-center">
          <h1
            style={{ fontFamily:'monospace' }}
            className="text-center text-dark fw-bolder mt-4"
          >
            Welcome to <span className="whisper">QuickChat</span> 
          </h1>
          <h4 style={{ fontFamily:'monospace' }} className="text-center text-dark mt-5">Enter Your Username</h4>

          <div className="input-container">
            <input onChange={(e) => setUserName(e.target.value)} type="text" />
          </div>

          <button
            onClick={handleUser}
            className="login-btn"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
