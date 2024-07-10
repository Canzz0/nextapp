"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [descrip, setDescrip] = useState('');

  const fetchData = async () => {
    try {
      const res = await fetch('/api/post');
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error('Veri alma işlemi başarısız oldu:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiY2x5ZGNqanphMDAwMnJjNmEwMGZ4bDVqciIsIm5hbWUiOiJjYW4xIiwiZW1haWwiOiJjYW5AMSIsInBhc3N3b3JkIjoiJDJiJDEwJGh5cEVXY2oyald5VURxTUpNQW1SY3UwVFZtRWM4aXFTd3BqWHYxclhFL0lHakFoVHo1VmhTIn0sImlhdCI6MTcyMDY0NDM3MywiZXhwIjoxNzIwNjQ3OTczfQ.6ATHd1NMfj2TgwfRUEwuvyFALO92SXsjnyIoWEpmIpE"
  const AddData = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, descrip,token }), // JSON formatında veriyi gönderin
      });

      if (!response.ok) {
        throw new Error('HTTP isteği başarısız oldu.');
      }

      const responseData = await response.json();
      console.log('Sunucudan gelen yanıt:', responseData);
      fetchData()
      // Veri yenileme işlemini yapabilirsiniz, örneğin:
      setName('');
      setDescription('');

    } catch (error) {
      console.error('İstek gönderme veya işleme hatası:', error);
    }
  };


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

      {data.map((d, index) => (
        <div key={index}>
          <span>{d.name}: {d.descrip}</span>
          <button onClick={() => deleteData(d.id)}>Sil</button>
        </div>
      ))}

      <form onSubmit={AddData}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="İsim"
        />
        <input
          type="text"
          value={descrip}
          onChange={(e) => setDescrip(e.target.value)}
          placeholder="Açıklama"
        />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Page;
