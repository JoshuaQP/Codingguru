import React, { Component } from 'react';
import "./guru.css";
import NavBar from "../navbar/navBar";


class Guru extends Component {
    state = {  }
    render() { 
        return (
                  <React.Fragment>
              <NavBar />
            <div className="guru-Container">
               

                 <div className="guru-motto">
                <h3> <span className="heading1">When the student is ready </span>  <br /> <span className="heading2"> The teacher will appear  </span>  </h3>
                </div>

                <div className="imagecontainer">

                    <div className="joshua">
                    <img className="joshua-img" src="/img/joshua.png" alt="Joshua"/>
                        
                    </div>

                    <div className="jorge">
                    <img className="jorge-img" src="/img/jorge.png" alt="jorge"/>

                    </div>

                </div>
                
               

            </div>

            </React.Fragment>
          );
    }
}
 
export default Guru;