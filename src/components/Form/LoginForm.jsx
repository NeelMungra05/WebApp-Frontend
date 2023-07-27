import React from "react";
import { useRef } from "react";
import Input from "../UI/Input";
import img4 from "../../assets/login_img.png";
import styles from "./Form.module.css";

const LoginForm = (props) => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const loginButtonHandler = (e) => {
    e.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    props.loginHandler({
      username,
      password,
    });
  };
  const registerHandler = (e) => {
    e.preventDefault();
    props.navbarStateChanger("register");
  };

//   return (
//     <>
   
   
//       <section className={styles.section}>

//         <div classname = {styles.imgdiv}>
//         <img src={img} alt="logo" height="500px"/>
//         </div>





return (

  <>

    <div className={styles.container}>

    <div className={styles.imageContainer}>

      <img src={img4} alt="" className={styles.image} />

    </div>

    <div className={styles.formContainer}>

    <section className={styles.section}>

      
    <div className={styles["form-box-login"]}>
          <div className={styles["form-value"]}>
            <form action="">
              <h2>Login</h2>
              <div className={styles.inputbox}>
                {/* <FontAwesomeIcon
                  className={styles["font-awesome"]}
                  icon={faUser}
                /> */}
                <Input
                  label="Username"
                  reverse={true}
                  ref={usernameInputRef}
                  input={{
                    id: "username",
                    type: "text",
                    placeholder: "Enter your Username ",
                  }}
                />
              </div>
              <div className={styles.inputbox}>
                {/* <FontAwesomeIcon
                  className={styles["font-awesome"]}
                  icon={faKey}
                /> */}
                <Input
                  reverse={true}
                  label="Password"
                  ref={passwordInputRef}
                  input={{
                    id: "password",
                    type: "password",
                    placeholder: "Enter your Password ",
                  }}
                />
              </div>
              <button onClick={loginButtonHandler} type="submit">
                Login
              </button>
              <div className={styles.linkButton}>
                <p>
                  Don't have a account?{" "}
                  <a onClick={registerHandler} href="/register">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

 

    </section>

    </div>

    </div>

  </>

);

};
export default LoginForm;
