import React, { useEffect } from 'react'

function Error() {
    useEffect(()=>{

      const php=async ()=>{

         const url= await fetch('http://localhost/production/Admin/json.php');
         const res= await url.json();
          console.log(res)
      }

php()
    },[])
  return (
    <div className='dis_cont_right'><h1>404 NOT FOUND</h1></div>
  )
}

export default Error