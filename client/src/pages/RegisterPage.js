import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 200) {
      alert("Registration failed.");
    } else {
      alert("Registration successful.");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: "500px", height: "600px" }}>
        <div className="card-body d-flex justify-content-center align-items-center">
          <form className="login w-100" onSubmit={register}>
            <h1>Register</h1>
            <div className="form-group">
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button className="w-100">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
