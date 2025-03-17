import googleLogo from "../assets/google.png";

const LoginForm = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <div className="social-login">
        <button className="social-button">
          <img src={googleLogo} alt="Google" className="social-icon" />
          Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
