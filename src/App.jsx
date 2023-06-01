import { useState } from "react";
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
  const Main = (props) => {
    return (
      <>
        <form action="">
          <div>
            <label htmlFor="">Username </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <div>
            <label htmlFor="">Confirm Password</label>
            <input type="password" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <p>
          Already registered? Then <a href="">Login Here</a>
        </p>
      </>
    );
  };
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
