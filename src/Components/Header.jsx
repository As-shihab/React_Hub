
import React from 'react'


function Header() {
  return (
<header>
<div className='left'>
<h1 className='text-primary'>Logistics</h1>
</div>

<div className='search_ber d-flex'>
<input type='text' className='form-control'/> <button className='btn btn-primary'>Find</button>
</div>

<div className='user_status'>
<div>
<image src=""/>
<button className='btn btn-primary'>Login</button>
</div>
</div>

</header>
  )
}

export default Header