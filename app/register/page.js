'use client'
import { useState } from 'react';

export default function Page() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const register=async()=>{
    try{
      const response = await fetch("api/register",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },

        body:JSON.stringify({name,email,password}),
      })
     
      const res=await response;
      if (res.ok) {
        window.location.href = '/login'; // Tarayıcıda doğrudan yönlendirme yapmak için
      }
    }catch(error){
      console.error('Başarısız');
    }
  };

  return (
    <>
    <div>
      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Adınızı giriniz'/>
      <input onChange={(e)=>setEmail(e.target.value)}type="text" placeholder='E-posta adresinizi giriniz'/>
      <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Şifrenizi Giriniz'/>
      <button onClick={()=>register()}>Kayıt ol</button>
    </div>
    </>
  )
}