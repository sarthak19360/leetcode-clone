import { Header } from "../components/Header";
import icon from "../assets/Images/leetcode-icon.webp";
import { useState } from "react";
export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Header icon={icon} />
      <div className="login-form">
        <h2>Sign Up</h2>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          className="btn"
          type="submit"
          onClick={async (e) => {
            const response = await fetch("http://localhost:3000/signup", {
              method: "POST",
              body: JSON.stringify({
                email: email,
                password: password,
              }),
            });
            const json = await response.json();
            console.log(json);
          }}
        >
          SIGNUP
        </button>
      </div>
    </>
  );
}
