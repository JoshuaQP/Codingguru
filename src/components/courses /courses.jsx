import React, { Component } from 'react';
import "./courses.css";
// import Brain from "./img/brain.png";
// import Data from "./data.js";


class Courses extends Component {
    state = {  
    };
    render() { 
        return ( 
             <div className="catalog-page">
            <div className="course-header">
             <h1 className="courses-heading"> Lets Start Coding</h1>
             </div>
             <div className="menu-tab-container">

             {/* tab menu section */}
             <div className="menu-tab">
                 <button className="course-btn">ALL </button>
                 <button className="course-btn">HTML </button>
                 <button className="course-btn">CSS </button>
                 <button className="course-btn">Javascript </button>
                 <button className="course-btn">React </button>
                 <button className="course-btn">Python </button>
                 <button className="course-btn">MongoDB</button>
                 </div>
                {/* main content */}
                 <div className="main-menu-item-container">
                 
                 <div className="row1">
                <div className="card">
                    <img src="" alt="" />
                        <h2> HTML </h2>
                        <h4>HTML Mastery </h4>
                </div>

                <div className="card">
                    <img src="" alt="" />
                        <h2> CSS </h2>
                        <h4>CSS Mastery </h4>
                </div>

                <div className="card">
                    <img src="" alt="" />
                        <h2> Javascript </h2>
                        <h4>Javascript Basics </h4>
                </div>
                </div>

                <div className="row2">
                <div className="card">
                    <img src="" alt="" />
                        <h2> React </h2>
                        <h4>React Basics </h4>
                </div>

                <div className="card">
                    <img src="" alt="" />
                        <h2> Python </h2>
                        <h4>Python Basics </h4>
                </div>

                <div className="card">
                    <img src="" alt="" />
                        <h2> MongoDB </h2>
                        <h4>MongoDb Basics </h4>
                </div>
                </div>   
                 </div>
                 
             </div>          
                </div>       
        );
    }
    

}
export default Courses;