function Login({
  universityId,
  password,
  setUniversityId,
  setPassword,
  loginUser,
  setPage,
}){
  return (
    <div className="login-page">
      <div className="login-box">

        <img
          src="https://klh.edu.in/wp-content/uploads/2020/04/LOGO3.png"
          className="auth-logo"
        />

        <h1>KLH Canteen</h1>

        <p>Welcome Back</p>

       <input
  type="text"
  placeholder="Enter University ID"
  value={universityId}
  onChange={(e) => setUniversityId(e.target.value)}
/>

       <input
  type="password"
  placeholder="Enter Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
        <button
          className="login-btn"
          onClick={loginUser}
        >
          Login
        </button>

        <button
  className="register-btn"
  onClick={() => setPage("register")}
>
  New User Registration
</button>

        <p
          className="forgot-password"
          onClick={() => setPage("forgot")}
        >
          Forgot Password?
        </p>

      </div>
    </div>
  );
}

export default Login;