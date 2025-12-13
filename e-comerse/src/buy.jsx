import React, { useEffect, useState } from 'react'
import KidsPage from './Kids'
import { useParams } from 'react-router-dom';
import data from '/public/db/product.json'

function BuyPage() {
  const [clicked,setClicked]=useState(false);
  const {id}=useParams();
  const [product,setProduct]=useState(null);

  // const allproduct=[...data.kidsproduct, ...data.girlsproduct, ...data.boysproducts, ...data.womensproduct, ...data.mensproducts]
  //     const product=allproduct.find(p=>p.id==id)
  // useEffect(()=>{
    fetch("/public/db/product.json"+id)
    .then(res=>{return res.json()})
    .then(data=>{ setProduct(data)
      // const all=[...data.kidsproduct, ...data.girlsproduct, ...data.boysproducts, ...data.womensproduct, ...data.mensproducts]
      // const item=all.find(p=>p.id==id)
      // setProduct(item)
      // console.log("all:",all)
      // console.log("Url id:",id)
    }
    ).catch(err=>{console.log(err)})

  // },[id])
  if(!product) return <h3 style={{marginTop:"20%"}}>Loading...</h3>
  return (
    <>
      <div class="card mb-3" style={{width: "800px",marginTop:"150px",marginLeft:"170px"}}>
  <div class="row g-0" style={{height:"300px"}}>
    <div class="col-md-4">
      <img src={product.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text">{product.type}</p>
        <p class="card-text">{product.price}</p>
        <p class="card-text">{product.size}</p>
        <p class="card-text">{product.description}</p>
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