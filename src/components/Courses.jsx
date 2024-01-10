import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import UpdateIcon from '@mui/icons-material/Update';
import { baseurl } from './baseurl';
function Courses() {
  let {courseid} = useParams() ;
  const [courses , setcourses]  =  useState([]) ;

  useEffect(()=>{
    function callback1(data) {
      console.log(data.courses) ;    
      setcourses(data.courses) ;
    }
    function callback(res){
      res.json().then(callback1) ;
    }
    fetch(`${baseurl}/admin/courses/` , {
      method : "GET" ,

      headers : {
        "Authorization" : "Bearer " + localStorage.getItem("token") 
      }
    }).then(callback) ;
  } , []) ;
  //console.log(courses) ;
  let c = null ;
   for(let i = 0 ;i <courses.length ; i ++) {
    if(courseid == i){
      c = courses[i] ;
      //break ;
    }
   }
console.log(c) ;
//console.log(c._id);
if(!c){
  return <div>
    Loading...
  </div>
}

function Coursecard(props){
  const c = props.c; 
  return (  <div style ={{padding : "8px" , marginTop : "3rem" }}>
  <Card sx={{ maxWidth: 400  , minHeight : 200}}>
       <CardMedia
         sx={{ height: 140 }}
         image= {c.imageLink}
         
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
          {c.title}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           {c.description}
         </Typography>
       </CardContent>
       <CardActions>
         <Button size="small" variant="outlined" >BUY RS.{c.price}</Button> 
         
       </CardActions>
     </Card>
      
   <br /> <br />
   </div>
  )
}
return (
 
  <div >
   <center><Coursecard c = {c}/></center>
  
  <center><Update courses = {courses} c= {c} setcourses = {setcourses} /></center>

   
  </div>
  
 )
 function Update(props){ 
  const [title, setTitle] = React.useState("");
  const[Description , setDescription] = React.useState("") ;
  const [price , setprice] = React.useState("" ) ;
  const [imagelink , setimagelink] = React.useState("") ;
  const c = props.c ;
  console.log(c._id) ;
  return (
  <div>
  
  <Typography fontSize={25}   >   <UpdateIcon size  = 'lg'></UpdateIcon> Update Course Details  </Typography>
<Card variant="outlined"  style = {{backgroundColor : "#ECF0F1"  , maxWidth : "50rem"} }>
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



<br />
<center>
<button type="submit" class="btn btn-primary btn-block mb-2" size = "lg" onClick={()=>{
  function callback2(data) {
    // /alert('Course updated Sucessfully') ;
      console.log(data) ;
      let updatedcourse = [] ;
      for(let i = 0 ;i <props.courses.length ; i ++){
        if(props.courses[i]._id == c._id){
              updatedcourse.push({
                _id : props.courses[i]._id , 
                description : Description , 
                title : title , 
                price : price , 
                imageLink : imagelink 
              })
              
        }else{
          updatedcourse.push(props.courses[i]) ;
        }
      }
      props.setcourses(updatedcourse);
      // for(let i = 0 ;i <updatedcourse.length ; i ++){
      //   console.log(updatedcourse[i]) ;
      // }
      console.log(updatedcourse) ;
  }
  function callback(res) {
      res.json().then(callback2);
  }
  fetch(`${baseurl}/admin/courses/` + c._id, {
      //const token = localStorage.getItem("token") ;

      method: "PUT" ,
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
}}>Update Course</button>
</center>
</form>

</Card>
</div>
  )
}
  



}

export default Courses
