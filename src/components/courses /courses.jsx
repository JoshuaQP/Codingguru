import React  from 'react'
import "./courses.css";
import NavBar from '../navbar/navBar';
import Codeimg from "./codeimg";
import { useState } from "react";




const Courses = () => { 
    const [items, setItems] = useState(Codeimg);

        return ( 
            <React.Fragment>
                <NavBar/>
             <div className="catalog-page">
                 
             <div className="course-header">             
             <h1 className="courses-heading"> Coding with Purpose</h1>
             </div>
             <div>
                 <button> javascript</button>
                 <button> jquery</button>
                 <button> react</button>
                 <button> mongoDB</button>

            </div>      
             </div>
             </React.Fragment>        
                       
        );
    }
    


export default Courses;