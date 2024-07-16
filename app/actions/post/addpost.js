"use server";

import { cookies } from "next/headers";

export async function addPost(prevState, formData) {
  const name = formData.get("name");
  const descrip = formData.get("descrip");

  const cookie=cookies()
  const token = cookie.get('Authorization').value;
 try {
   const response = await fetch("http://localhost:3000/api/post", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({ name, descrip,token }),
   });
   const endResponse = JSON.parse(await response.text());

   console.log(endResponse.message)
   if (!response.ok) {
    return{
      message:('Ekleme Başarısız'+endResponse.message),
     }
    
   }else{
    return{
      message:endResponse.message
    }
   }
  
 } catch (error) {
  console.log(error)
 }
}
