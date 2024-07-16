"use client";
import { registerUser } from "../actions/registeruser";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

export default function Page() {
  const [state, formAction] = useFormState(registerUser, initialState);

  return (
    <>
      <form action={formAction}>
        <label>İsim:</label>
        <input type="text" id="name" name="name" required />
        <label>Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="email">Parola</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="email">Parola Tekrar</label>
        <input type="password" id="repassword" name="repassword" required />
        <p aria-live="polite">{state?.message}</p>
        <button>Kayıt Ol</button>
      </form>
    </>
  );
}
