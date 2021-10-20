import React, { Component } from 'react';
import {Link,useParams} from "react-router-dom"
import "./courses.css";




class Courses extends Component {
    state = {  
    };
    render() { 
        return ( 
             <div className="catalog-page">
            <div className="course-header">
             <h1 className="courses-heading"> Coding with Purpose</h1>
             </div>
             <div className="menu-tab-container">

             {/* tab menu section */}
             <div className="menu-tab">
                 <button className="course-btn">ALL </button>               
                 <button className="course-btn">Javascript </button>        
                 <button className="course-btn">Python </button>
                
                 </div>
                {/* main content */}
                 <div className="main-menu-item-container">
                 
                 <div className="row1">

                <div className="card">

                <Link className="nav-link" to="/video">
                        <img src="" alt="" />   
                        <h2> Javascript </h2>
                        <h4>Javascript Basics </h4>
                        </Link>
                </div>
                

                <div className="card">
                <Link className="nav-link" to="/video"> 
                    <img src="" alt="" />
                        <h2> Python </h2>
                        <h4>Python Basics </h4>
                        </Link>
                </div>
                </div>

                  
                 </div>
                 
             </div>          
                </div>       
        );
    }
    

}
export default Courses;