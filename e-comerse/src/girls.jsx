import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import data from '/public/db/product.json'

function GirlsPage({}) {
  const [girlsdata,setGirlsdata]=useState([]);

  const girls=data.girlsproduct

  // useEffect(()=>{
  //   fetch("/db/girls.json")
  //   .then(response=>response.json()).
  //   then(data=>setGirlsdata(data.girlsproduct))
  // },[])

  const navigate=useNavigate();

  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-5" style={{marginTop:"50px"}}>
    {girls.map(product=>(
    <div key={product.id} class="card shadow" style={{width: "17rem"}}>
  <img src={product.image} class="card-img-top" alt=""/>
  <div class="card-body">
    <i className='bi bi-heart' style={{color:"black",paddingLeft:"230px"}}></i>
    <h6 className="card-text" style={{fontSize:"15px",height:"25px",display:"flex"}}>{product.name}</h6>
        <h4 class="card-text" style={{fontSize:"16px",paddingRight:"10px",display:"flex"}}>&#8377; {product.price}</h4>
    <p style={{fontSize:"13px",display:"flex"}}>🚚Free Delivery</p>
    <button onClick={()=>{navigate("/BuyPage")}} class="btn btn-primary">Buy</button>
  </div>
  </div>
     ))}
  </div>
    </>
  )
}

export default GirlsPage