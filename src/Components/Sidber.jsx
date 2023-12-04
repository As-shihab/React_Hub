import React from 'react'
import { NavLink } from 'react-router-dom'


function Sidber() {
  return (
   
     
     <div className='dis_cont_left'>
    
<div className='rounded bg-secondary-subtle p-1'><i className='fa fa-search text-secondary p-1'></i> <input type='text' className='input_sidber' placeholder='Type to Search'/></div>
<h5 className='p1 menu'>Menu</h5>

<NavLink to='/'><li><i class="fa fa-desktop "></i> Deshbord</li></NavLink>
<NavLink to='/Inbond'><li><i class="fa fa-arrow-down "></i> Inbond</li></NavLink>
<NavLink to='/Outbond'><li><i class="fa fa-arrow-up "></i> Outbond</li></NavLink>
<NavLink to='/Users'><li><i class="fa fa-user "></i> Users</li></NavLink>


<h5 className='p1 menu'>Websites</h5>
<NavLink to='/Product'><li><i class="fa fa-desktop"></i> Product</li></NavLink>
<NavLink to='/Contest'><li><i class="fa fa-arrow-down"></i>Contest</li></NavLink>
<NavLink to='/Shortlist'><li><i class="fa fa-star"></i>Shortlist</li></NavLink>
<NavLink to='/Bin'><li><i class="fa fa-code"></i>Bin</li></NavLink>


     </div>
     
     
     
    
  )
}

export default Sidber