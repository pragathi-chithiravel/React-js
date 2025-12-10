import React, { useEffect, useState } from 'react'

function BoysPage({}) {
    const [boysdata,setBoysdata]=useState([]);

    useEffect(()=>{
        fetch("/db/boys.json").then(response=>response.json())
        .then(data=>setBoysdata(data.boysproducts))
        

    },[])
  return (
    <>
        <div className="row row-cols-1 row-cols-md-3 g-5" style={{marginTop:"50px"}}>
    {boysdata.map(products=>(
        <div key={products.id} class="card shadow" style={{width: "17rem"}}>
  <img src={products.image} class="card-img-top" alt=""/>
  <div class="card-body">
    <i className='bi bi-heart' style={{color:"black",paddingLeft:"230px"}}></i>
    <h6 class="card-title" style={{fontSize:"15px",height:"25px",display:"flex"}}>{products.name}</h6>
        <h4 class="card-text" style={{fontSize:"16px",paddingRight:"10px",display:"flex"}}>&#8377; {products.price}</h4>
    <p style={{fontSize:"13px",display:"flex"}}>🚚Free Delivery</p>

    <button class="btn btn-primary">Buy</button>
  </div>
</div>
    ))}
</div>

    </>
  )
}

export default BoysPage