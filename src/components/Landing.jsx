
import React from "react";
import "./Landing.css"
import { useNavigate } from "react-router-dom";
/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
    const navigate = useNavigate() ;
    return <div>
        
      <body100>
       {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/> */}

      

      <div class="jumbotron text-center">
    <h1 class="display-4">Welcome to  Course.io</h1>
    <p class="lead">Sign Up as a an Instructor or a Learner</p>
    <hr class="my-4"/>
    <button  type="button" class="btn btn-primary" size = "lg" onClick = {() => {navigate('/register')}}>Register as an Instructor</button>
    
        <br/>
        <br />
  <button type="button" class="btn btn-primary" size = "lg" onClick = {() => {navigate('/login')}} >Register as a Learner</button>    
    
    
  </div>

  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body100>
   
        
        
    </div>
}

export default Landing;