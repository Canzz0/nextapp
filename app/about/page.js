import Image from 'next/image'
import React from 'react'

//burada şu oldu biz loading'i görmek için 3 saniyelik bir gecikme ekledik loading component'inin çalışıp çalışmadığını görmek için
const sleep =(ms)=>{
    return new Promise((resolve)=>setTimeout(resolve,ms));
}
const Page = async() => {
    await sleep(1000);

  return (
    <div>

        <Image width={200} height={200} src={'next.svg'}/>
        <span>Tanıtım Sayfası</span>
    </div>
  )
}

export default Page