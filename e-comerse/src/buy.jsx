import React, { useState } from 'react'
import KidsPage from './Kids'

function BuyPage() {
  const [clicked,setClicked]=useState(false);
  return (
    <>
      <div class="card mb-3" style={{width: "800px",marginTop:"150px",marginLeft:"170px"}}>
  <div  class="row g-0" style={{height:"300px"}}>
    <div  class="col-md-4">
      <img src="img" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">name</h5>
        <p class="card-text">price</p>
        <p class="card-text">size</p>
        <p class="card-text">description</p>
      </div>
      <div>
        <button>Add Cart</button>
        <button onClick={()=>setClicked(true)}>{clicked? "Purchased" : "Buy"}</button>
      </div>
    </div>
  </div>
</div> 
    </>
  )
}

export default BuyPage