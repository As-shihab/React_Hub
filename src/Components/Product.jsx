import React, { useEffect, useState } from 'react'

function Product() {
    const [json, setJson]=useState([]);

    useEffect(()=>{
     
const Todo= async ()=>{
 const Url= await fetch('http://localhost/Api/Json.php');
  
}

Todo()
    },[])
  return (
    <div className='dis_cont_right'>Product</div>
  )
}

export default Product