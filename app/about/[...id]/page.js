import React from 'react'

const DetailPage = ({params}) => {

  
    //params dediğimiz id yani gelen id hani klasör varya o işte. 
    //3 tane nokta koymamızısın sebebi şu 3/223/322 gibi birden fazla farklı id'ye gitmek için


  return (
    <div>about details {params.id}</div>
  )
}

export default DetailPage