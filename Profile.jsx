import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return <p>يرجى تسجيل الدخول.</p>;

  return (
    <div style={{ padding: 32 }}>
      <h2>حسابي</h2>
      <p>الاسم: {user.name}</p>
      <p>البريد: {user.email}</p>
      <button onClick={logout} style={{ background: "#e63946", color: "#fff", padding: 10, borderRadius: 8 }}>تسجيل الخروج</button>
    </div>
  );
}