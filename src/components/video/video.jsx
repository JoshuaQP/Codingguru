import React, { Component } from 'react'

export class video extends Component {
    render() {
        return (
            <div className="video-pagecontainer">
                <div className="video-table">
                    <h3>Introduction</h3>
                    <ul>
                        <li> 
                            <span className="status-container"> 
                            </span>                          
                        </li>
                        <div className="title-container">
                        <span className="course-icon">
                            
                        </span>

                        <span className="course-title">

                        </span>
                        </div>
                    </ul>
                </div>
                   {/* lecture content */}
                <div className="video">
                    <h2> <span></span> <span>Content mangement System</span></h2>
                    <video width="320" height="240" autoPlay  >
                        
                    </video>

                </div>
                
            </div>
        )
    }
}

export default video
