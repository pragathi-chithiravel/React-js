import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

function RegisterPage(){

     const [username,setUsername]=useState("")
     const [password,setPassword]=useState("")
     const [email,setEmail]=useState("")
     const [mobile,setmobile]=useState("")
     
     const navigate=useNavigate()

      
      const handlesubmit=(e)=>{
      e.preventDefault();
     }

     const userdata={
      username: username,
      password:password,
      email:email,
      mobile:mobile}


      const submitbutton=()=>{      if(username && password && email && mobile){
        localStorage.setItem("user",JSON.stringify(userdata))
        console.log(localStorage)
        alert("Registration Succesfuly !")
      navigate("/")
      }else{
      alert("Fill all Details")
     }
    }


     const closebutton=()=>{
      navigate("/")
   }


    return(
        
       <div className="register-bg">
      
         <form  onClick={handlesubmit} className='registerform'>
            <button type="button" className="btn-close" aria-label="Close" onClick={closebutton}></button>
            <p id="title" style={{marginTop:"3%",fontFamily:"bold"}}>Register Page</p>
        <label for="username" className="registerform-label">UserName:</label>
        <input id='firstinput' type="text" placeholder="Enter UserName" value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
        <label for="password" className="registerform-label">Password:</label>
        <input id='firstinput' type="text" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <label for="email" className="registerform-label" style={{marginLeft:"3%",width:"27%"}}>Email Id :</label>
        <input type="email" id='firstinput' placeholder="Enter Email Id" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label for="mobile" className="registerform-label">Mobile No:</label>
        <input type="text" id='firstinput' placeholder="Enter Mobile No" value={mobile} onChange={(e)=>setmobile(e.target.value)}/><br/>

        <button id='registerbutton' type='submit' onClick={submitbutton}>Submit</button>
         </form>
   
       
       </div>
    );
}
export default RegisterPage;  