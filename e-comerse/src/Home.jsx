import { useEffect, useState } from "react";

function HomePage(){
    return(
        <div className="home-container">
        <p className="upcome-dis">UpComing Discounts</p>


       <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
     <div class="carousel-item" data-bs-interval="2000">
      <img src="/public/offerbannerimg.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="/public/mensbanner.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/public/womensbanner.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/public/girlsbanner.jpg" class="d-block w-100" alt="..."/>
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