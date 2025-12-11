import React, { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function KidsPage() {
     const [kidsdata,setKidsdata]=useState([])

     useEffect(()=>{
        fetch("/db/kids.json")
        .then(response=>response.json())
        .then(data=>setKidsdata(data.kidsproduct))

     },[])
    
     const navigate=useNavigate();

     const handlebuybutton=()=>{
      navigate("/BuyPage")
     }

  return (
    <>
       
<div className="row row-cols-1 row-cols-md-3 g-5" style={{marginTop:"50px"}}>

    {kidsdata.map(product=>(
        <div key={product.id} class='card shadow' style={{width: "17rem"}}>
  <img src={product.image} class="card-img-top" alt=""/>

  <div class="card-body">
    <i className='bi bi-heart' style={{color:"black",paddingLeft:"230px"}}></i>
    <h4 class="card-title" style={{fontSize:"15px",height:"25px",display:"flex"}}>{product.name}</h4>

    <div className='offerdetials'>
        <h6 style={{paddingRight:"15px",paddingTop:"1%",display:"flex"}}>&#8377; {product.finalAmount}</h6>
        <del class="card-text" style={{fontSize:"16px",paddingRight:"10px",color:"gray"}}>{product.price}</del>
        <h6 class="card-text" style={{paddingTop:"1%",color:"green"}}>{product.discountPercent}% Off</h6>
         </div>
    <p style={{fontSize:"13px",display:"flex"}}>🚚Free Delivery</p>

    <button onClick={handlebuybutton} class="btn btn-primary">Buy</button>

    
  </div>
</div>
    ))}
</div>
    </>
  )
}

export default KidsPage;