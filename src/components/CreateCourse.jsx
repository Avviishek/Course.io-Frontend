import React from "react";
import { Card } from "@mui/material";
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.

import { baseurl } from "./baseurl";
function CreateCourse() {
    const [title, setTitle] = React.useState("");
    const[Description , setDescription] = React.useState("") ;
    const [price , setprice] = React.useState("" ) ;
    const [imagelink , setimagelink] = React.useState("") ;
    return <div style = {{marginTop : "5rem" , marginLeft: "10rem" , marginRight: "10rem"}  }>
        <Card variant="outlined" style = {{backgroundColor : "#ECF0F1"}}>
        <center><h2>Add Your Course Contents</h2></center>
        <br />
        <br />
        <form>

  <div class="form-outline mb-2">
    <input type="text" id="form5Example1" class="form-control" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
    
  </div>
<br />
 
  <div class="form-outline mb-2">
    <input type="text" id="form5Example2" class="form-control" placeholder="Description" onChange ={(e) => setDescription(e.target.value)}/>
    
  </div>
  <br />
  <div class="form-outline mb-2">
    <input type="number" id="form5Example2" class="form-control" placeholder="Price" onChange = {(e)=> setprice(e.target.value)}/>
    
  </div>
  <br />
  <div class="form-outline mb-2">
    <input type="link" id="form5Example2" class="form-control" placeholder="Image Link" onChange = {(e)=>setimagelink(e.target.value)}  />
    
  </div>
  <br />
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
   Published
  </label>
</div>
 

  <br />
  <center>
  <button type="submit" class="btn btn-primary btn-block mb-2" size = "lg" onClick={()=>{
    function callback2(data) {
      alert('Course created Sucessfully') ;
        console.log(data) ;
    }
    function callback(res) {
        res.json().then(callback2);
    }
    fetch(`${baseurl}/admin/courses` , {
        //const token = localStorage.getItem("token") ;

        method: "POST" ,
        body : JSON.stringify({
            title : title ,
            description : Description , 
            price : price , 
            imageLink : imagelink ,
            published : true 
        }) , 
        headers : {
            "content-type" : "application/json" ,
            "Authorization" : "Bearer " +  localStorage.getItem("token")
        }
    }).then(callback) ;
  }}>Add Course</button>
  </center>
</form>
</Card>
    </div>
}
export default CreateCourse;