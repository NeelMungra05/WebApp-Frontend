import { useState } from "react";
import LoginForm from "./components/Form/LoginForm";
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

  let content = <p>Welcome home</p>;

  if (isLogin) {
    content = <LoginForm />;
  }

  if (isRegister) {
    content = <SignupForm />;
  }

  return (
    <>
      <Header
        home={isHome}
        login={isLogin}
        register={isRegister}
        navbarStateChanger={navbarStateChanger}
      />
      {content}
    </>
  );
}

export default App;
