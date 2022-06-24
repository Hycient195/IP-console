import "./Login.css";

export default function Login(){
  return(
    <body>
      <div class="page_container">
        <div class="page_left">
          <div class="page_left_content">
            <h1 class="title" >WELCOME BACK</h1>
            <p class="subtitle grey-text" >Please enter your details</p>
            <form action="">

              <label for="username">
                <p class="username">Username</p>
                <input class="fullwidth text-input" id="email" type="email" placeholder="Enter your email"/>
              </label>

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
                  <a href="#">Forgot password</a>
                </p>
              </div>

              <div class="buttons_container">
                <button class="sign_in btn bg-red ">Sign in</button>
                <button class="sign_in_with_google btn">
                  {/* <!-- <img src="" alt=""> --> */}
                  <i>image</i>
                  Sign in with Google
                </button>
              </div>
            </form>

            <p class="centralize">
              Don't have an account? <a class="red-text" href="#">Sign up for free</a>
            </p>
          </div>
        </div>
        <div class="page_right">

        </div>
      </div>
    </body>
  )
}