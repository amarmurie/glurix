import { useState } from "react";

export default function useNotify() {
  const [message, setMessage] = useState("");
  const show = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2200);
  };
  const NotifyBar = message
    ? <div style={{
        position: "fixed", right: 16, bottom: 24, background: "#00b4d8",
        color: "#fff", padding: "14px 32px", borderRadius: 16, fontSize: 18,
        boxShadow: "0 4px 20px rgba(0,0,0,0.13)", zIndex: 9999, transition: "all 0.3s"
      }}>{message}</div>
    : null;
  return [NotifyBar, show];
}