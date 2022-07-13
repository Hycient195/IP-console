import "./Login.css";
import { Link } from "react-router-dom";

export default function Login(){
 
  return(
    <body>
      <div class="page_container">
        <div className="page_left_container">
        <div class="page_left">
          <div class="page_left_content">
            <h1 class="title" >WELCOME BACK</h1>
            <p class="subtitle green-text" >Please enter your details</p>
            <form action="">

              <div className="form_top_content">
                <label for="username">
                  <p class="username ">Username:</p>
                  <input class=" text-input" id="username" type="email" placeholder="johndoe3156"/>
                </label>

                <label for="port">
                  <p class="username ">Port:</p>
                  <input class=" text-input" id="port" type="number" placeholder="8080"/>
                </label>
              </div>

              <div className="form_middle_content">
                <label for="email">
                  <p class="email ">Email:</p>
                  <input class="fullwidth text-input" id="email" type="email" placeholder="johndoe@gmail.com"/>
                </label>

                <label htmlFor="ip-list-file">
                  <p className="">Allowed Mac Address:</p>
                  <input type="file" />
                </label>
              </div>
              

              <label for="password">
                <p class="password ">Password:</p>
                <input class="fullwidth text-input" id="password" type="password" placeholder=""/>
              </label>

              <div class="actions">
                <label for="remember_me">
                  <input id="remember_me" type="checkbox"/>
                  <p class="">Remember me</p>
                </label>

              </div>

              <div class="buttons_container">
                  <Link className="btn fullwidth centralize bg-light-green black-text" to="/dashboard">Sign in</Link>    
              </div>
            </form>
            
          </div>
        </div>
        </div>
        <div class="page_right">

        </div>
      </div>
    </body>
  )
}