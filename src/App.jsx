const App = () => {
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
        <div className="input-wapper">
          <input type="email" placeholder="Email address" className="input-field" required />
          <i className="material-symbols-rounded">mail</i>
        </div>
      
    
    <div className="input-wapper">
          <input type="password" placeholder="Password" className="input-field" required />
          <i className="material-symbols-rounded">lock</i>
        </div>

      </form>
    </div>
    
   
  )
}

export default App
