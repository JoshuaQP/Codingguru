import React from 'react'
import "./courses.css";
import NavBar from '../navbar/navBar';
import { Link } from 'react-router-dom';




const Courses = () => { 
    

        return ( 
            <React.Fragment>
                <NavBar/>
             <div className="catalog-page">
                 
             <div className="course-header">             
             <h1 className="courses-heading"> Coding with Purpose</h1>
             </div>
             
                 <div className="courses-selction">
             <div className="course-card">      
               <h3>HTML</h3>
               <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse neque facilis facere illum sed dolorum doloremque sunt perspiciatis rem repellat.</p>
               <Link className="course" to="/lecture"> Go to course </Link>
             </div>
             <div className="course-card">      
               <h3>CSS</h3>
               <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse neque facilis facere illum sed dolorum doloremque sunt perspiciatis rem repellat.</p>
               <Link className="course" to="/lecture"> Go to course </Link>
             </div>
             <div className="course-card">      
               <h3>Javascript</h3>
               <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse neque facilis facere illum sed dolorum doloremque sunt perspiciatis rem repellat.</p>
               <Link className="course" to="/lecture"  > Go to course </Link>
               </div>
             </div>

                 

                  
             </div>
             </React.Fragment>        
                       
        );
    }
    


export default Courses;