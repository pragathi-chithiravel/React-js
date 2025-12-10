import React from 'react'
import KidsPage from './Kids'

function BuyPage() {

  const productdetails=[
    ...kidsdata,
    ...boysdata,
    ...girlsdata,
    ...mensdata,
    ...womensdata

  ]

  const item=productdetails.find(p=>p.id==id)
  return (
    <div>
      <div class="card mb-3" style="max-width: 540px;">
  <div  class="row g-0">
    <div  class="col-md-4">
      <img src={item.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{item.name}</h5>
        <p class="card-text">{item.price}</p>
        <p class="card-text">{item.sizes}</p>
        <p class="card-text">{item.description}</p>
      </div>
      <div>
        <button>Add Cart</button>
        <button>Buy</button>
      </div>
    </div>
  </div>
</div> 
    </div>
  )
}

export default BuyPage