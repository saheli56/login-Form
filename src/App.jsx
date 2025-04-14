import { useState } from "react";
const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login-container">
      <h2 className="form-title">log in with</h2>
      <div className="social-login">
        <button className="social-button">
          <img src="google.svg" alt="Google" className="social-icon" />
          Google
        </button>
        <button className="social-button">
          <img src="apple.svg" alt="Apple" className="social-icon" />
          Apple
        </button>
      </div>
      <p className="separator"><span>or</span></p>

      <form action="#" className="login-form">
        <div className="input-wrapper">
          <input type="email" placeholder="Email address" className="input-field" required />
          <i className="material-symbols-rounded">mail</i>
        </div>


        <div className="input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input-field"
            required
          />
          <i className="material-icons">lock</i>
          <i
            className={`material-icons eye-icon`}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? 'visibility' : 'visibility_off'}
          </i>
        </div>
        <a href="#" className="forgot-pass-link">Forgot Password?</a>
        <button className="login-button">Log In</button>
      </form>

      <p className="signup-text">Don't have an account? <a href="#">Signup now</a></p>
    </div>


  )
}


export default App
