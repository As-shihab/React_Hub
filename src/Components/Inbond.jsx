import React from 'react'

function Inbond() {
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
    
    
<div className='inbond_sel'>
<div className='left'>

<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>

<div className='mid'>
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>

<div className='right'>
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>


</div>


<div className='inbond_input'>

<form>
 
<div className='d-flex justify-content-around'>

<div>
<label for="exampleInputEmail1" class="form-label">User Id</label>
<input type="email" class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp"/>

</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Name</label>
<input type="password" class="form-control" id="exampleInputPassword1"/>
</div>
</div>



<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Qr Code scan</label>
  <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


</div>
    
    </div>
  )
}

export default Inbond