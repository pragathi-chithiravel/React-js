import { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'

function HomePage(){

  const image=[
    "/offerbannerimg.jpg",
    "/mensbanner.png",
    "/womensbanner.png",
    "/girlsbanner.jpg"
  ]

  const [current,setCurrent]=useState(0)

  useEffect(() => {
    const slide=setInterval(()=>{
      setCurrent((prev)=>(prev+1)%image.length)
    },3000)

    return ()=>clearInterval(slide)
  },[])

  const navigate=useNavigate();

  const onclickkids=()=>{
    navigate("/Kids")
  }

  const onclickgirls=()=>{
    navigate("/Girls")
  }

  const onclickboys=()=>{
    navigate("/Boys")
  }
  const onclickwomens=()=>{
    navigate("/Womens")
  }
  const onclickmens=()=>{
    navigate("/Mens")
  }
 

    return(
        <div className="home-container">
        <p className="upcome-dis">UpComing Discounts</p>

       <motion.div 
        initial={{x:-600,opacity:0}}
        animate={{x:10, opacity:1}}
        transition={{duration:2}}
        >
       <img src={image[current]} class="d-block w-100" alt="..." style={{ width: "100%", height: "300px", objectFit: "cover",animation:"ease-in-out",marginBottom:"50px"}} />
      </motion.div>

    
      <div class="row row-cols-1 row-cols-md-5 g-4">
  <div class="col" onClick={onclickkids}>
    <div class="card" id="homepagecard">
      <img src="/public/kids2.jpg" class="card-img-top" alt="..." style={{height:"250px"}}/>
      <div class="card-body" style={{height:"130px",fontWeight:"bolder"}}>
        <h5 class="card-title" style={{fontSize:"15px",marginLeft:"0px",fontWeight:"bolder"}}>Kids Collection All</h5>
        <h6 class="card-text" style={{paddingTop:"1%",color:"white"}}>50% Off</h6>
        <p class="card-text">Shop Now</p>
      </div>
    </div>
  </div>
  <div class="col" onClick={onclickmens}>
    <div class="card" id="homepagecard">
      <img src="/public/men5.jpg" class="card-img-top" alt="..." style={{height:"250px"}}/>
      <div class="card-body" style={{height:"130px",fontWeight:"bolder"}}>
        <h5 class="card-title" style={{fontSize:"15px",marginLeft:"0px",fontWeight:"bolder"}}>Mens Shirt</h5>
        <h6 class="card-text" style={{paddingTop:"1%",color:"white"}}>30% Off</h6>
        <p class="card-text">UpComing Offer Don't Miss it</p>
      </div>
    </div>
  </div>
  <div class="col" onClick={onclickgirls}>
    <div class="card" id="homepagecard">
      <img src="/public/girls5.jpg" class="card-img-top" alt="..." style={{height:"250px"}}/>
      <div class="card-body" style={{height:"130px",fontWeight:"bolder"}}>
        <h5 class="card-title" style={{fontSize:"15px",marginLeft:"0px",fontWeight:"bolder"}}>Summer Fashion</h5>
        <h6 class="card-text" style={{paddingTop:"1%",color:"white"}}>40% Off</h6>
        <p class="card-text">UpComing Offer Don't Miss it</p>
      </div>
    </div>
  </div>
  <div class="col" onClick={onclickwomens}>
    <div class="card" id="homepagecard">
      <img src="/public/womens5.jpg" class="card-img-top" alt="..." style={{height:"250px"}}/>
      <div class="card-body" style={{height:"130px",fontWeight:"bolder"}}>
        <h5 class="card-title" style={{fontSize:"15px",marginLeft:"0px",fontWeight:"bolder"}}>Saree Collections</h5>
        <h6 class="card-text" style={{paddingTop:"1%",color:"white"}}>5% Off</h6>
        <p class="card-text">UpComing Offer Don't Miss it</p>
      </div>
    </div>
  </div>
  <div class="col" onClick={onclickboys}>
    <div class="card" id="homepagecard">
      <img src="/public/boy1.jpg" class="card-img-top" alt="..." style={{height:"250px"}}/>
      <div class="card-body" style={{height:"130px",fontWeight:"bolder"}}>
        <h5 class="card-title" style={{fontSize:"15px",marginLeft:"0px",fontWeight:"bolder"}}>Shirts</h5>
        <h6 class="card-text" style={{paddingTop:"1%",color:"white"}}>10% Off</h6>
        <p class="card-text">UpComing Offer Don't Miss it</p>
      </div>
    </div>
  </div>
</div>


<hr style={{marginTop:"70px",marginLeft:"40px"}}/>

<div style={{backgroundColor:"black",color:"white", padding:"30px",width:"100%",marginLeft:"35px",marginBottom:"30px"}}>
  <h4 style={{paddingBottom:"15px"}}>Contact Us</h4>
  <p>Tamizhini Boutique : 
No. 27, Periya Theru,
Near Bus Stand,
 Pattukkotai – 614015</p>
<p>tamizhiniboutique@gmail.com</p>
<p>Phone no: +91 6379580793 , +91 9943748465</p>
</div>

 </div>
    );
}
export default HomePage;  