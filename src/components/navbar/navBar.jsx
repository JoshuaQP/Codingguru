import React, { Component } from 'react';
import "./navBar.css";
import {Link} from "react-router-dom"

class NavBar extends Component {
   
    state ={}
    render() {


        return( 
          <div className="nav-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-gray" >
        <div className="container-fluid">
          
          <Link className="navbar-brand " to="/index" > <span className="logo">CodingGurus</span> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-guru">
              <img className="nav-img" src="/img/guru.png" alt="telveision"/>
                <Link className="nav-link  "  to="/guru"> <span className="guru-link"> GURUS </span> </Link>
              </li>
              <li className="nav-courses">
              <img className="nav-img" src="/img/television.png" alt="telveision"/>
                <Link className="nav-link"  to="/courses"> <span className="course-link"> Courses </span></Link>
              </li>
              <li className="nav-Learning">
                <img className="nav-img" src="/img/brain.png" alt="telveision"/>
                <Link className="nav-link" to= "/learning"><span className="learning-link"> Learning </span></Link>
              </li>
              <li className="nav-settings">
              <img className="nav-img" src="/img/settings.png" alt="telveision"/>
                <Link className="nav-link" to="/settings"><span className="settings-link"> Settings </span></Link>
              </li>
              <li className="signout-section">
              <Link className="nav-link" to="/contact-us"><button className="contact-btn">Contact us</button></Link>

                <Link className="nav-link" to="/signout"><span  className="signout-link "> Sign out  </span></Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-primary" to="/cart">
              <i aria-hidden="true" className="fa fa-cart-plus mr-1"></i>
              View Cart &nbsp;
              <span className="badge badge-secondary cart-badge">{this.context.cart.length}
              </span>
            </Link>
           </form> */}

          </div>
        </div>
      </nav>
      </div>
      
      
    );

    }

    }

 
export default NavBar;