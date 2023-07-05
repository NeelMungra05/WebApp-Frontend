import React from "react";
import { useRef } from "react";
import Input from "../UI/Input";
import img from "../../assets/login.jpg";;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faKey,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Form.module.css";

const SignupForm = (props) => {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    const email = emailInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;

    props.registerHandler({
      username,
      email,
      password,
      confirmPassword,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    props.navbarStateChanger("login");
  };



  return (

    <>
  
      <div className={styles.container}>
  
      <div className={styles.imageContainer}>
  
        <img src={img} alt="" className={styles.image} />
  
      </div>
  
      <div className={styles.formContainer}>
  
      <section className={styles.section}>
  
        
    
      <div className={styles["form-box-register"]}>
          <div className={styles["form-value"]}>
            <form action="">
              <h2>Register</h2>
              <div className={styles["inputbox"]}>
                {/* <FontAwesomeIcon
                  className={styles["font-awesome"]}
                  icon={faEnvelope}
                /> */}
                <Input
                  label="Email"
                  reverse={true}
                  ref={emailInputRef}
                  input={{
                    id: "email",
                    type: "email",
                    placeholder: "Enter your Email",
                  }}
                />
              </div>
              <div className={styles["inputbox"]}>
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
                    placeholder: "Enter your Username",
                  }}
                />
              </div>
              <div className={styles.inputbox}>
                {/* <FontAwesomeIcon
                  className={styles["font-awesome"]}
                  icon={faKey}
                /> */}
                <Input
                  label="Password"
                  reverse={true}
                  ref={passwordInputRef}
                  input={{
                    id: "password",
                    type: "password",
                    placeholder: "Enter your Password",
                  }}
                />
              </div>
              <div className={styles["inputbox"]}>
                {/* <FontAwesomeIcon
                  className={styles["font-awesome"]}
                  icon={faCheck}
                /> */}
                <Input
                  label="Confirm Password"
                  reverse={true}
                  ref={confirmPasswordInputRef}
                  input={{
                    id: "password",
                    type: "password",
                    placeholder: "Confirm Your Password",
                  }}
                />
              </div>
              <button onClick={formSubmitHandler} type="submit">
                Register
              </button>
              <div className={styles.linkButton}>
                <p>
                  Already have an account?{" "}
                  <a onClick={loginHandler} href="/login">
                    Login
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
  













  // return (
  //   <>
  //     <section className={styles.section}>

  //     <div classname = {styles.imgdiv}>
  //       <img src={img} alt="logo" height="500px"/>
  //       </div>
     
  //       <div className={styles["form-box-register"]}>
  //         <div className={styles["form-value"]}>
  //           <form action="">
  //             <h2>Register</h2>
  //             <div className={styles["inputbox"]}>
  //               {/* <FontAwesomeIcon
  //                 className={styles["font-awesome"]}
  //                 icon={faEnvelope}
  //               /> */}
  //               <Input
  //                 label="Email"
  //                 reverse={true}
  //                 ref={emailInputRef}
  //                 input={{
  //                   id: "email",
  //                   type: "email",
  //                   placeholder: "Enter your Email",
  //                 }}
  //               />
  //             </div>
  //             <div className={styles["inputbox"]}>
  //               {/* <FontAwesomeIcon
  //                 className={styles["font-awesome"]}
  //                 icon={faUser}
  //               /> */}
  //               <Input
  //                 label="Username"
  //                 reverse={true}
  //                 ref={usernameInputRef}
  //                 input={{
  //                   id: "username",
  //                   type: "text",
  //                   placeholder: "Enter your Username",
  //                 }}
  //               />
  //             </div>
  //             <div className={styles.inputbox}>
  //               {/* <FontAwesomeIcon
  //                 className={styles["font-awesome"]}
  //                 icon={faKey}
  //               /> */}
  //               <Input
  //                 label="Password"
  //                 reverse={true}
  //                 ref={passwordInputRef}
  //                 input={{
  //                   id: "password",
  //                   type: "password",
  //                   placeholder: "Enter your Password",
  //                 }}
  //               />
  //             </div>
  //             <div className={styles["inputbox"]}>
  //               {/* <FontAwesomeIcon
  //                 className={styles["font-awesome"]}
  //                 icon={faCheck}
  //               /> */}
  //               <Input
  //                 label="Confirm Password"
  //                 reverse={true}
  //                 ref={confirmPasswordInputRef}
  //                 input={{
  //                   id: "password",
  //                   type: "password",
  //                   placeholder: "Confirm Your Password",
  //                 }}
  //               />
  //             </div>
  //             <button onClick={formSubmitHandler} type="submit">
  //               Register
  //             </button>
  //             <div className={styles.linkButton}>
  //               <p>
  //                 Already have an account?{" "}
  //                 <a onClick={loginHandler} href="/login">
  //                   Login
  //                 </a>
  //               </p>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
};

export default SignupForm;
