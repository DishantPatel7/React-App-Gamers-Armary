import { Link } from "react-router-dom";
import "./login2.css";
// import "./login2jsForSignup"
function Login2() {
  return (
    <>
    <div id="homeBTN"><Link to="/React-App-Gamers-Armary">Home</Link></div>
      <div id="login21">
        <div id="login21-content">
          <div class="login2" id="login2">
            <div class="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                <div class="social-container">
                  <a href="#" class="social">
                    <i class="ri-facebook-fill"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="ri-google-fill"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="ri-linkedin-box-fill"></i>
                  </a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
              </form>
            </div>
            <div class="form-container sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
                <div class="social-container">
                  <a href="#" class="social">
                    <i class="ri-facebook-fill"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="ri-google-fill"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="ri-linkedin-box-fill"></i>
                  </a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
              </form>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button class="ghost" id="signIn">
                    Sign In
                  </button>
                </div>
                <div class="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button class="ghost" id="signUp">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="footer">
            <b> Follow me on </b>
            <div class="icons">
              <a href="#" target="_blank" class="social">
                <i class="ri-github-fill"></i>
              </a>
              <a href="#" target="_blank" class="social">
                <i class="ri-instagram-fill"></i>
              </a>
              <a href="#" target="_blank" class="social">
                <i class="ri-twitter-fill"></i>
              </a>
              <a href="#" target="_blank" class="social">
                <i class="ri-linkedin-box-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login2;
