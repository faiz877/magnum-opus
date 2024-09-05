import { Routes, Route } from "react-router-dom";
import { Login } from "@/components/Login";
import { Signup } from "@/components/Signup";

export default function Auth() {
  return (
    <div className="auth-container">
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
