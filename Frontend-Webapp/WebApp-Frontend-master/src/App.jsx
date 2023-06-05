import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [active, setActive] = useState(false);
  const [activePopup, setActivePopup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterClick = () => {
    setActive(true);
  };

  const handleLoginClick = () => {
    setActive(false);
  };

  const handlePopupClick = () => {
    setActivePopup(true);
  };

  const handleCloseClick = () => {
    setActivePopup(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username === "admin@123" && password === "admin123") {
      alert("Login Successful!");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <header>
        <h2 className="logo">Logo</h2>
        <nav className="navigation">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <button className="btnLogin-popup" onClick={handlePopupClick}>
            Login
          </button>
        </nav>
      </header>

      <div className={`wrapper ${active ? "active" : ""}`}>
        <span className="icon-close" onClick={handleCloseClick}>
          <ion-icon name="close"></ion-icon>
        </span>
        <div className={`form-box login ${active ? "" : "active"}`}>
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <p href="#">Forgot Password?</p>
              <button type="submit" className="btn">
                Login
              </button>
              <div className="login-register">
                <p>
                  Don't have an account?
                  <a
                    href="#"
                    className="register-link"
                    onClick={handleRegisterClick}
                  >
                    Sign-up
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>

        <div className={`form-box register ${active ? "active" : ""}`}>
          <h2>Registration</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
                <ion-icon name="person-circle"></ion-icon>
              </span>
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" /> Agree to terms and conditions
              </label>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <div className="login-register">
              <p>
                Already have an account?
                <a href="#" className="login-link" onClick={handleLoginClick}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
