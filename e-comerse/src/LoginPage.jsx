import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterPage from "./RegisterPage";

function LoginPage(){ 
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate();

    const clickregisterbutton=()=>{
        navigate("/RegisterPage")
    }

    const handlesubmit=()=>{
        const storeuser=JSON.parse(localStorage.getItem("user"))

    
    if (!storeuser){
        alert("No User Found! Please Register first")
    }

    if(storeuser.username===username && storeuser.password===password){
        navigate("/Home")
    }
    else{
        alert("invaid username or password")
    }}
    


    return(
        <div className="loginpage-bg">
            <form id="formdiv">
             <p id="title" style={{paddingTop:"5%",fontFamily:"bold"}}>LoginPage</p>
             <label for="exampleFormControlInput1" className="loginform-label">UserName:</label>
             <input type="text" class="usernameinput" id="exampleFormControlInput1" placeholder="Enter UserName" value={username} onChange={(e)=>setUsername(e.target.value)}/> <br/>

             <label for="inputPassword5" class="loginform-label">Password :</label>
             <input type="password" class="passwordinput" id="inputPassword5" aria-describedby="passwordHelpBlock" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br/>
                      <button onClick={handlesubmit} id="login" type="button">Login</button><br/>
             <button onClick={clickregisterbutton} id="register" type="submit">Register</button>
             <p style={{fontFamily:"bold",paddingBottom:"5%"}}>Forgot Password?</p>
            </form>
        </div>
     
           
    
        
    );
}
export default LoginPage;   