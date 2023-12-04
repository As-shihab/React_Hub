import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Outbond() {
    const [todos , setTodos]=useState([]);
    useEffect(()=>{
    
        const Api_Out=async ()=>{
            const url = axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
                setTodos(res.data);
           
            })
           
        }
Api_Out()

    },[])
  return (
    <div className='dis_cont_right'>
    <div className='chart_1_container'>
    <div className='chart_1'>
    
    <div className='st_1'></div>
    <div className='st_1'></div>
    <div className='st_1'></div>
    <div className='st_1'></div>
     <div className='st_1'></div>
     <div className='st_1'></div>
     <div className='st_1'></div>
    </div>


    <div className='chart_1'>
    <div class="pie"></div>

    </div>

  


</div> 
<div className='out_bond_cont'>
  
<table className='table'>
<thead>

<tr>
<th>Id</th>
<th>Product</th>
<th>UserID</th>
<th>Location</th>
<th>Action</th>


</tr>


</thead>

<tbody>
{todos.map((dir)=>{
 
    return(
        <tr>
        <td>{dir.id}</td>
        <td>{dir.name}</td>
        <td>{dir.address.zipcode}</td>
        <td>
     {dir.address.street}
        </td>
        <td><button className='btn btn-success btn-sm'>Approve</button><button className='btn btn-sm btn-danger'>Del</button></td>
        
        
        </tr>

    )
})}


</tbody>

</table>

</div>
    
    
    </div>
  )
}

export default Outbond