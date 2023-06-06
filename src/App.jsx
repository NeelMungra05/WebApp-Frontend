import { useState } from "react";
import Forms from "./components/Form/Forms";
import Header from "./components/Header/Header";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

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

  return (
    <>
      <Header
        home={isHome}
        login={isLogin}
        register={isRegister}
        navbarStateChanger={navbarStateChanger}
      />
      <Forms />
    </>
  );
}

export default App;
