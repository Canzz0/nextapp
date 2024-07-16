import React from 'react'

const fetchData= async () =>{
    const res = await fetch('https://restcountries.com/v3.1/name/united')
    return res.json()
}

const fetchData2= async () =>{
    const res = await fetch('https://restcountries.com/v3.1/name/peru')
    return res.json()
}
const Page = async() => {

    const data1=fetchData()
    const data2=fetchData2()

    const resultData= await Promise.all([
        data1,
        data2
    ])

  return (
    <>
      <span>Veri Çekme Sayfası(consolda)</span>
    
    </>
  )
}

export default Page
