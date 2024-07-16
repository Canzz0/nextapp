"use server";
import { emailIsValid, passwordMatchValid, passwordValid } from "../../utils/validationUtils";

export async function registerUser(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const repassword = formData.get("repassword");
  const name= formData.get("name")

  if (!emailIsValid(email)) {
    return {
      message: "Geçersiz E-posta adresi",
    };
  }

    //BU PAROLA KONTROLÜ BURADA UTİLS'DE İSTEDİĞİMİZ KAYITLARI SÖYLÜYORUZ.
    if(passwordValid(password)){
      const resultMessage = passwordValid(password);
      return{
        message:resultMessage
      }
    }
    
  if(!passwordMatchValid(password,repassword)){
    return{
      message: "Parolalar Eşleşmiyor",

    }
  }
  try {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password,name }),
    });


    const errorResponse = JSON.parse(await response.text());

    if (response.ok) {
      return {
        message: "Kayıt İşlemi Başarılı",
      };
    } else {
      return {
        message: "Kayıt İşlemi Başarısız: " + errorResponse.message,
      };
    }
  } catch (error) {
    return {};
  }
}
