"use client";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    try {
      const response = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email, password }),
      });

      const res = await response
      if (res.ok) {
        window.location.href = '/'; // Tarayıcıda doğrudan yönlendirme yapmak için
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="E-posta adresinizi giriniz"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Şifrenizi Giriniz"
        />
        <button onClick={() => login()}>Giriş Yap</button>
      </div>
    </>
  );
}
