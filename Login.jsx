import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    nav("/");
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>تسجيل دخول</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: "auto" }}>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="البريد الإلكتروني" required style={{ width: "100%", margin: 8, padding: 8 }} />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="كلمة المرور" type="password" required style={{ width: "100%", margin: 8, padding: 8 }} />
        <button type="submit" style={{ width: "100%", background: "#00b4d8", color: "#fff", padding: 10, borderRadius: 8 }}>دخول</button>
      </form>
    </div>
  );
}