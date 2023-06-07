import { useState } from "react";
import SignupForm from "./components/Form/SignupForm";
import Header from "./components/Header/Header";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navbarStateChanger = (navState) => {
    switch (navState) {
      case "home":
        setIsHome(true);
        setIsLogin(false);
        setIsRegister(false);
        break;
      case "register":
        setIsRegister(true);
        setIsHome(false);
        setIsLogin(false);
        break;
      case "login":
        setIsLogin(true);
        setIsHome(false);
        setIsRegister(false);
      default:
        break;
    }
  };

  // Login handler function
  const handleLogin = (credentials) => {
    //Add login auhtnetication here
    if (
      credentials.email === "admin@123" &&
      credentials.password === "admin123"
    ) {
      setIsLoggedIn(true);
    }
  };

  // Register handler function
  const handleRegister = (userData) => {
    // Perform registration logic here
    console.log(userData);
  };

  return (
    <>
      <Header
        home={isHome}
        login={isLogin}
        register={isRegister}
        navbarStateChanger={navbarStateChanger}
      />
      {isLogin && !isLoggedIn && (
        <SignupForm
          formType="login"
          handleLogin={handleLogin}
          navbarStateChanger={navbarStateChanger}
        />
      )}
      {isRegister && (
        <SignupForm
          formType="register"
          handleRegister={handleRegister}
          navbarStateChanger={navbarStateChanger}
        />
      )}
    </>
  );
}

export default App;
