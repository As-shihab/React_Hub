import React from 'react'
import Header from './Header'
import Sidber from './Sidber'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Deshbord from './Deshbord'
import Outbond from './Outbond'
import Users from './Users'
import Error from './Error'
import Inbond from './Inbond'
import Product from './Product'

function Home() {
  return (
<>

<Header/>

<div  className='home_container'>







<BrowserRouter>
<Sidber/>
<Routes>

<Route path='/' element={<Deshbord/>}/>
<Route path='/Outbond' element={<Outbond/>}/>
<Route path='/Inbond' element={<Inbond/>}/>
<Route path='/Users' element={<Users/>}/>
<Route path='*' element={<Error/>}/>
<Route path='/Product' element={<Product/>}/>
</Routes>


</BrowserRouter>

</div>


</>

  )
}

export default Home