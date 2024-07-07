"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


//Burada useClient kullandık ve router yaptık

//use client demek client kodları yazacağız demektir yani serverside değilde client side yazıcaz.

const Trial = () => {
    const routerRed=useRouter()
  return (
    <>
    <button onClick={()=>routerRed.push('/about')}>
        About go
    </button>
    </>
    
  )
}

export default Trial
