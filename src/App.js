import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import JWT from "./JWT";
import Login from "./Login";
import "./styles.css";
import User from "./User";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/jwt" element={<JWT />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <JWT />
      </BrowserRouter>
    </div>
  );
}
