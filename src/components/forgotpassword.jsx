function ForgotPassword({ setPage }) {
  return (
    <div className="login-page">
      <div className="login-box">

        <h1>Forgot Password</h1>

        <p>
          Enter your mobile number
        </p>

        <input
          type="tel"
          placeholder="Mobile Number"
        />

        <button className="login-btn">
          Reset Password
        </button>

        <button
          className="register-btn"
          onClick={() => setPage("login")}
        >
          Back to Login
        </button>

      </div>
    </div>
  );
}

export default ForgotPassword;