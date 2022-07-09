import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);
  const [userData, setUserData] = useState([]);

  const loginUser = (e) => {
    e.preventDefault();

    if (email === "bikesh" && password === "1234") {
      navigate("/user");
    } else {
      console.log("error");
      alert("Please Enter Valid Information");
    }

    console.log(email, password);
    console.log(userData);
  };
  return (
    <>
      <form>
        <h1>Login </h1>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginUser}>
          Login
        </button>
      </form>
    </>
  );
}
