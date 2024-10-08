"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { addPost } from "../actions/post/addpost";
import { getPost } from "../actions/post/getpost";


const initialState = {
  message: "",
  result: []
};
const Page = () => {
  const [state, formAction] = useFormState(addPost, initialState);
  const [data, setData] = useState(initialState.result);


  const fetchData = async () => {
    try {
      const result = await getPost();
      setData(result);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  };
  useEffect(() => {
  
    fetchData();
  }, [state.result,state.message]);
  

  const deleteData=async (id)=>{
    try {
      const response = await fetch('/api/post', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), 
      });
      if (!response.ok) {
        throw new Error('HTTP isteği başarısız oldu.');
      }
      const responseData = await response.json();
      console.log('Sunucudan gelen yanıt:', responseData);
      fetchData()
    } catch (error) {
      console.error('İstek gönderme veya işleme hatası:', error);
    }
  }
  return (
    <div>
      <Image width={200} height={200} src={"/next.svg"} alt="Next.js Logo" />
      <p aria-live="polite">{state?.message}</p>
      {data.map((d, index) => (
        <div key={index}>
          <span>{d.name}: {d.descrip}</span>
          <button onClick={() => deleteData(d.id)}>Sil</button>
        </div>
      ))}

      <form action={formAction}>
        <label>Adı:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="İsim"
        />
          <label>Açıklama:</label>
        <input
          type="text"
             id="descrip"
          name="descrip"
          placeholder="Açıklama"
        />
        <button>Gönder</button>
      </form>
    
    </div>
  );
};

export default Page;
