import React, { useEffect, useState } from 'react'

function Users() {
    const [todos, setTodos]=useState([]);

    useEffect(()=>{
  const Api= async function(){
    const data= await fetch('https://jsonplaceholder.typicode.com/todos');
    const todo= await data.json();
  setTodos(todo)
  }

Api()

    },[])
  return (
    <div className='dis_cont_right'>
    
    
    {todos.map((dir)=>{
       console.log(dir)
  return(
    <div>
    <table className='table'>
    <thead>
   <tr>
   <th>{dir.id}</th>
   <th>{dir.completed}</th>
   <th>{dir.title}</th>

   </tr>
    
    </thead>
    
    </table>
    
    </div>
  )

    })}
    
    
    
    </div>
  )
}

export default Users