import React, { useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from "@mui/material/colors";
import { baseurl } from "./baseurl";
function ShowCourses() {
    const [courses, setCourses] = React.useState([]);

    // Add code to fetch courses from the server
    // and set it in the courses state variable.
    useEffect(()=>{
        function callback1(data) {
            setCourses(data.courses) ;
            console.log(data) ;
        }
        function callback(res){
            res.json().then(callback1) ;
        }
 fetch(`${baseurl}/admin/courses/` , {
    method : "GET",
    headers :{
        "Authorization" : "Bearer " + localStorage.getItem("token") 
    }
 }).then(callback) ;
    } , []) ;
    return <div style = {{display : "flex" , flexWrap : "wrap"}}>
       
        {courses.map(course => <Course course={course} />)}
    </div>
}

function Course(props) {
    return <div style ={{padding : "8px" , marginTop : "3rem" , marginLeft : "3rem"}}>
        <Card sx={{ maxWidth: 500  , minHeight : 200 , background : grey}}>
      <CardMedia
        sx={{ height: 140 , width : 400  }}
        image= {props.course.imageLink}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.course.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" >BUY RS.{props.course.price}</Button> 
        
      </CardActions>
    </Card>
    </div>
}

export default ShowCourses;