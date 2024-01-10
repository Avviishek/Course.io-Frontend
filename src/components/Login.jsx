import React from "react";
import Button from '@mui/material/Button';
import { baseurl } from "./baseurl";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import { useNavigate } from "react-router-dom";
/// File is incomplete. You need to add input boxes to take input for users to register.
function Login() {
    const [email, setEmail] = React.useState("");
    const [password , setpassword] = React.useState("");
   const navigate = useNavigate() ;
    return <div>
       <MDBContainer fluid className="p-3 my-5">

<MDBRow style={{marginTop : "5rem"}}>

  <MDBCol col='8' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
  </MDBCol>

  <MDBCol col='4' md='4'>


    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>setEmail(e.target.value)}/>
    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>setpassword(e.target.value)}/>


    <div className="d-flex justify-content-between mx-4 mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <Button className="mb-4 w-100" variant="contained" size="lg" onClick={()=>{
        function callback1(data){
            localStorage.setItem("token"  ,  data.token) ;
            console.log(data.token);
            window.location = '/';
            //navigate('/about') ;
        }
        function callback(res){
            res.json().then(callback1) ;
        }
        fetch(`${baseurl}/admin/login`  , {
            method : "POST" ,
            body : JSON.stringify({
                username : email , 
                password : password
            }) , 
            headers : {
                "content-type" : "application/json"
            }
        } ).then(callback) ;
    }}>Log in</Button>


   

   

  </MDBCol>

</MDBRow>

</MDBContainer>
    </div>
}

export default Login;