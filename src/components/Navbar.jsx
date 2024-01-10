import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { baseurl } from './baseurl';
import Sidebar from './Sidebar';
function Navbar() {
       const navigate = useNavigate() ;
      const[email ,setemail] = React.useState(null) ;
      
      useEffect(()=>{
            function callback2(data){
                  setemail(data.username) ;
                  console.log(data.username) ;
            }
            function callback(res){
                  res.json().then(callback2) ;
            }
         fetch(`${baseurl}/admin/me` , {
            method : "GET" ,
            headers : {
                  "content-type" : "application/json" ,
                  "Authorization" : "Bearer " + localStorage.getItem("token") 

            }
         }).then(callback) ;
      } , []);
      
   if(email){
  return (
  
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="">Course.io</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/about">Create Course</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/courses">All courses</a>
          </li>
       
        
      </ul>
      <form class="d-flex">
        
        {/* <button class="btn btn-primary" type="button" style={{marginRight:"1rem"}}>Register</button> */}
        <div> {email}</div>
        <button class="btn btn-primary" type="button" onClick={()=>{localStorage.setItem("token" , null); window.location = '/'}}>Logout</button>
      </form>
    </div>
  </div>
</nav>
<Sidebar/>
    </div>
  )
   }
   return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="">Course.io</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          
         
         
          
        </ul>
        <form class="d-flex">
          
          <button class="btn btn-primary" type="button" onClick={()=>{navigate('/register')}} style={{marginRight:"1rem"}} >Register</button>
          <button class="btn btn-primary" type="button" onClick={()=>{navigate('/login')}}>Login</button>
        </form>
      </div>
    </div>
  </nav>
 
      </div>
      
    )

}

export default Navbar
