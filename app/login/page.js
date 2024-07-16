"use client";
import { useFormState } from "react-dom";
import { loginUser } from "../actions/login/loginuser";

const initialState = {
  message: "",
};

export function Signup() {
  const [state, formAction] = useFormState(loginUser, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      <label>Parola</label>
      <input type="password" id="password" name="password" required />
      <label>Parola Tekrar</label>
      <input type="password" id="repassword" name="repassword" required />
      <p aria-live="polite">{state?.message}</p>
      <button>Giriş Yap</button>
    </form>
  );
}

export default Signup;
