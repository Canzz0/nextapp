import React from "react";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/twodata`);
  return res.json();
};

const data = await getData();
console.log(data.Posts)

const Page = () => {
  return <>
    {data.Posts.post.map((d, index) => (
      <>
      <h1>Veriler</h1>
       <h2 key={d.id}>
          {d.title}
        </h2>
        <span>{d.body}</span>
      <br/></>
       
      ))}
  </>;
};

export default Page;
