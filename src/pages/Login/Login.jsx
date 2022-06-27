import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import googleLogo from '../../images/login/googleLogo.svg';

export default function Login(){
  // const [ emailPH, setEmailPH ] = useState("");
  // const emailString = "Enter your email"
  // const condition = false;

  // for (let index = 0; index < emailString.length; index++) {
  //   // const element = array[index];
  //   setInterval(() => {
  //     setEmailPH(prevState => prevState += emailString[index])
  //   }, 2000);
    
  // }

  // console.log(emailPH);

  return(
    <body>
      <div class="page_container">
        <div class="page_left">
          <div class="page_left_content">
            <h1 class="title" >WELCOME BACK</h1>
            <p class="subtitle green-text" >Please enter your details</p>
            <form action="">

              <div className="form_top_content">
                <label for="username">
                  <p class="username">Username</p>
                  <input class=" text-input" id="username" type="email" placeholder="Enter your email"/>
                </label>

                <label for="port">
                  <p class="username">Port</p>
                  <input class=" text-input" id="port" type="number" placeholder="Enter port"/>
                </label>
              </div>

              <label for="email">
                <p class="email">Email</p>
                <input class="fullwidth text-input" id="email" type="email" placeholder="Enter your email"/>
              </label>

              <label for="password">
                <p class="password">Password</p>
                <input class="fullwidth text-input" id="password" type="password" placeholder="Enter your password"/>
              </label>

              <div class="actions">
                <label for="remember_me">
                  <input id="remember_me" type="checkbox"/>
                  <p class="">Remember me</p>
                </label>
                <p>
                  {/* <a href="#">Forgot password</a> */}
                </p>
              </div>

              <div class="buttons_container">
                  <Link className="btn fullwidth centralize bg-light-green black-text" to="/dashboard">Sign in</Link>    
                {/* <button class="sign_in_with_google btn fullwidth ">
                   <img src={googleLogo} alt=""/> 
                  <span>Sign in with Google</span>
                </button> */}
              </div>
            </form>

            {/* <p class="centralize">
              Don't have an account? <a class="red-text" href="#">Sign up for free</a>
            </p> */}
          </div>
        </div>
        <div class="page_right">

        </div>
      </div>
    </body>
  )
}