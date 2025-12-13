import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import HomePage from './Home'
import {Routes,Route,Link, useLocation, UNSAFE_createClientRoutesWithHMRRevalidationOptOut} from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import KidsPage from './Kids'
import BoysPage from './Boys'
import GirlsPage from './girls'
import MensPage from './mens'
import WomensPage from './Womens'
import { useNavigate } from 'react-router-dom'
import BuyPage from './buy'


function App() {

  const location=useLocation()

  const navigate=useNavigate();

  const hidenav=location.pathname==="/" || location.pathname==="/RegisterPage"

  const [popup,setPopup]=useState(false);
  const [wishlist,setWishlist]=useState(false);
  const [username,setUsername]=useState();

  useEffect(()=>{
    const storename=localStorage.getItem("username")
    if(storename){
      setUsername(storename)
    }
  },[])

  const handleclickprofile=()=>{
    setPopup(!popup)
  }

  const handleloginbutton=()=>{
    navigate("/")
  }

  const handlewishlist=()=>{
    setWishlist(true)
    
  }

  const handlesearchbar=()=>{
    
  }

  return (
    <>
      
      
   {!hidenav &&
      <nav>
        <div id='navbar' style={{zIndex:"1000"}}>
          <a className='navbar-brand'>👗Tamizhini</a>

         
    <Link className="nav-link" to="/Home">Home</Link>
    <Link className="nav-link"  to="/Kids">Kids</Link>
    <Link className="nav-link" to="/Boys">Boys</Link>
    <Link className="nav-link" to="/Girls">Girls</Link>
    <Link className="nav-link" to="/Mens">Mens</Link>
    <Link className="nav-link" to="/Womens">Womens</Link>
    
    <div id='inputdiv'>
    <input id='input' placeholder='search product'></input>
    <i style={{color:"black",paddingRight:"16px",marginTop:"2px"}} onClick={handlesearchbar} className='bi bi-search'></i>
    </div>
    


              <div className='profiles'>
              <i className='bi bi-person' onClick={handleclickprofile}></i>
              <h5>Profile</h5>
             </div>
             <div>
              <Link to="/cart" style={{textDecorationLine:"none"}}>
              <i className='bi bi-cart'></i>
              <h5>Cart</h5>
              </Link>
             </div>
             <div>
              <Link to="/wishlist" style={{textDecorationLine:"none"}}>
              <i className='bi bi-heart'></i>
              <h5>Wish list</h5>
              </Link>
             </div>
             
        </div>
      </nav>}

        
      
          {popup && (
      <div class="modal-dialog modal-sm" id='popupmsg'>
        <h5 style={{fontSize:"20px",marginLeft:"0",paddingBottom:"10px"}}>{username ? `Hi ${username}`: "Hi Gust"}</h5>
        <button onClick={handleloginbutton} style={{backgroundColor:"blue"}} className='loginbutton'>LogIn</button><br/>
        <button style={{backgroundColor:"red"}} className='loginbutton'>LogOut</button>
      </div>)}
  
      
      
      
      
         <Routes>
            <Route path='/Home' element={<HomePage/>}/>
            <Route path='/Kids' element={<KidsPage/>}/>
            <Route path='/Boys' element={<BoysPage/>}/>
            <Route path='/Girls' element={<GirlsPage/>}/>
            <Route path='/Mens' element={<MensPage/>}/>
            <Route path='/Womens' element={<WomensPage/>}/>
            <Route path='/' element={<LoginPage/>}/>
          <Route path="/RegisterPage" element={<RegisterPage/>}/>
          <Rout path='/BuyPage/:id' element={<BuyPage/>}/>
        </Routes>

        <Link to="/"></Link>

         {/* <Link to={`/BuyPage/${p.id}`}>
    <button class="btn btn-primary">Buy</button>
    </Link> */}

      

    </>
  )
}

export default App;           