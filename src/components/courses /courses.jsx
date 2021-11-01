import React, { Component } from 'react';
import {Link,useParams} from "react-router-dom"
import "./courses.css";
import NavBar from '../navbar/navBar';




class Courses extends Component {
    state = {  
    };
    render() { 
        return ( 
            <React.Fragment>
                <NavBar/>
             <div className="catalog-page">
                 
             <div className="course-header">             
             <h1 className="courses-heading"> Coding with Purpose</h1>
             </div>       
             </div>
             </React.Fragment>        
                       
        );
    }
    

}
export default Courses;