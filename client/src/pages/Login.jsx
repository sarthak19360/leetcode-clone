import { Header } from "../components/Header";
import icon from "../assets/Images/leetcode-icon.webp";
import { useState } from "react";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Header icon={icon} />
      <div className="login-form">
        <h2>Login</h2>
        <input type="email" name="" id="" placeholder="Email"
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <input type="password" name="" id="" placeholder="Password"
          onChange={(e) => { setPassword(e.target.value) }} />
        <button className="btn" onClick={async (e) => {
          const response = await fetch('http://localhost:3000/login',{
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password
            })
          })

          const json = await response.json();
          localStorage.setItem('token',json.token);
        }}>LOGIN</button>
      </div>
    </>
  );
}
