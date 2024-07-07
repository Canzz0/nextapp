import React from 'react'
const fetchGenerate= async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}
const Page = async({params}) => {
  const data = await fetchGenerate()
  
  return ( 
    <div>
      Fazla verilerde bu yapılır mesela bizim id leri olan ve liste halinde gelen verilerimiz var işte biz burada hepsi için tek tek sayfa oluşturabiliriz.

    </div>
  )
}

export default Page

//bu aşağıdaki fonksiyon kesinlikle böyle olmalı
export async function generateStaticParams(){
  const posts = await fetchGenerate()
  //ToString yapmak zorunlu
  return posts.map(post => ({id:post.id.toString()}))
}
