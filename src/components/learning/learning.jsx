import React, { Component } from 'react';
import "./learning.css";
import NavBar from '../navbar/navBar';





class Learning extends Component {
    ;

    state = {  };
    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
            <div className="learning-container">

                <h1 className="course-material-heading">Course Resources</h1>
                
                <div className="learning-container">
                    {/* row 1 begining */}
                <div className="row1">              

                <div className="card">
                    <img src="" alt="" />
                        <h4>Javascript Material </h4>
                </div>
                <div className="card">
                    <img src="" alt="" />
                        
                        <h4>Python Material </h4>
                </div>

                </div>
                
                    
                </div>
               
           
           </div>
           </ React.Fragment>
            

         );
    }
}
 
export default Learning;