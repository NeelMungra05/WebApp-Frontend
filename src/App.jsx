import { useState, useEffect } from "react";
import LoginForm from "./components/Form/LoginForm";
import SignupForm from "./components/Form/SignupForm";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Footer from './components/Footer/Footer';

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
        break;
      case "logout":
        localStorage.removeItem("isLoggedIn");
        setIsHome(true);
        setIsLoggedIn(false);
        break;
      default:
        setIsHome(false);
        setIsLogin(false);
        setIsRegister(false);
        break;
    }
  };

  useEffect(() => {
    const loggedInChecker = localStorage.getItem("isLoggedIn");

    if (loggedInChecker) {
      setIsLoggedIn(true);
      navbarStateChanger();
    }

    return () => {};
  }, [setIsLoggedIn]);

  // Login handler function
  const loginHandler = (credentials) => {
    //Add login auhtnetication here
    if (
      credentials.username === "admin@123" &&
      credentials.password === "admin123"
    ) {
      setIsLoggedIn((prevState) => {
        return true;
      });
      localStorage.setItem("isLoggedIn", true);
      alert("Login");
      navbarStateChanger();
    }
  };

  // Register handler function
  const registerHandler = (userData) => {
    // Perform registration logic here
    console.log(userData);
    alert("Registration successfull");
    navbarStateChanger("home");
  };

  let content = <p><b>Welcome homes</b></p>;

  if (isLoggedIn) {
    content = <Services />;
  }

  if (isLogin) {
    content = <LoginForm loginHandler={loginHandler} navbarStateChanger={navbarStateChanger} />;
  }

  if (isRegister) {
    content = <SignupForm registerHandler={registerHandler} navbarStateChanger={navbarStateChanger} />;
  }

  return (
    <>
      <Header
        home={isHome}
        login={isLogin}
        register={isRegister}
        isLoggedIn={isLoggedIn}
        navbarStateChanger={navbarStateChanger}
      />
      <main>
        {content}
      </main>
      <Footer />
    </>
  );
}

export default App;
