import { useState } from "react";
import Forms from "./components/Form/Forms";
import Header from "./components/Header/Header";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header />
      <Forms />
    </>
  );
}

export default App;
