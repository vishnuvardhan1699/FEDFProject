import { useState } from "react";

function Register({ setPage }) {
  const [name, setName] = useState("");
  const [universityId, setUniversityId] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    if (!name || !universityId || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        universityId,
        password,
      })
    );

    alert("Registration Successful");

    setPage("login");
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="University ID"
          value={universityId}
          onChange={(e) => setUniversityId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={registerUser}
        >
          Register
        </button>

        <button
          className="register-btn"
          onClick={() => setPage("login")}
        >
          Back To Login
        </button>

      </div>
    </div>
  );
}

export default Register;