import React, { useEffect } from "react";
import "../index.css"
import { baseurl } from "./baseurl";
import Button from '@mui/material/Button';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
/// File is incomplete. You need to add input boxes to take input for users to login.
function Register() {
    const [email, setEmail] = React.useState("");
    const [password, setpassword] = React.useState("");
    const navigate = useNavigate() ;
   
    return <div >
            
            {/* <Navbar></Navbar> */}

           <MDBContainer fluid className="p-3 my-5 h-custom" style={{marginTop : "10rem"}}>

<MDBRow  style={{marginTop : "5rem" ,marginLeft: "5rem"}}>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='2' md='4'>

   

    

    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>setEmail(e.target.value)}/>
    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>setpassword(e.target.value)}/>

    <div className="d-flex justify-content-between mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      
    </div>

    <div className='text-center text-md-start mt-4 pt-2'>
      <Button className="mb-0 px-5" variant="contained" size='lg'onClick={()=>{
        function callback2(data) {
            localStorage.setItem("token" , data.token);
          console.log(data.token) ;
          window.location = '/' ;
          //localStorage.setItem("token"  ,  data.token) ;
          //navigate('/login') ;
        }
        function callback1(res){
         res.json().then(callback2) ;
        }
        fetch(`${baseurl}/admin/signup` , {
          method : "POST" ,
          body : JSON.stringify({
            username : email ,
            password : password
          }),
          headers : {
            "Content-type" : "application/json"
          }
          
        }).then(callback1) ;
      }} >Register</Button>
      <p className="small fw-bold mt-2 pt-1 mb-2" cursor:default> Have an account? <a onClick={()=>{navigate('/login')}} href="" className="pe-auto"  >Login</a></p>
    </div>

  </MDBCol>

</MDBRow>



</MDBContainer>




    </div>
       
   





    
   
}

export default Register;