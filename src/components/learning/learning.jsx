import React, { Component } from 'react';
import "./learning.css";





class Learning extends Component {
    ;

    state = {  };
    render() { 
        return ( 
            <div className="learning-container">

                <h1 className="course-material-heading">Course resources</h1>
                
                <div className="learning-container">
                    {/* row 1 begining */}
                <div className="row1">
                <div className="card">
                    <img src="" alt="" />
                        
                        <h4>HTML Material </h4>
                </div>

                <div className="card">
                    <img src="" alt="" />
                        
                        <h4>CSS Material </h4>
                </div>

                <div className="card">
                    <img src="" alt="" />
                        <h4>Javascript Material </h4>
                </div>
                </div>
                {/* row2 begging */}
                <div className="row2">
                <div className="card">
                    <img src="" alt="" />
                        
                        <h4>React Material </h4>
                </div>

                <div className="card">
                    <img src="" alt="" />
                        
                        <h4>Python Material </h4>
                </div>

                <div className="card">
                    <img src="" alt="" />
                        
                        <h4>MongoDb Material </h4>
                </div>
                </div>
                    
                </div>
               
           
           </div>
            

         );
    }
}
 
export default Learning;