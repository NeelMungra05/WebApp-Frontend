import { useState } from "react";
import Forms from "./components/Form/Forms";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Header = (props) => {
    return (
      <header>
        <nav>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </nav>
      </header>
    );
  };

  return (
    <>
      <Header />
      <Forms />
    </>
  );
}

export default App;
