import React from 'react';
import "./navBar.css";
import {Link} from "react-router-dom"
import { auth } from '../../firebase/firebase.utils';

const NavBar = ({ currentUser }) => (
          <div className="nav-container" >
        <nav className="navbar navbar-expand-lg navbar-light bg-gray" >
        <div className="container-fluid">
          
          <img className="nav-logo" src="/img/CodingGurus.png" alt="logo"/> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-guru guru">
              <img className="nav-img" src="/img/guru.png" alt="guru"/>
                <Link className="nav-link "  to="/guru"> <span className="guru-link"> Gurus </span> </Link>
              </li>
              <li className="nav-courses course">
              <img className="nav-img" src="/img/television.png" alt="telveision"/>
                <Link className="nav-link"  to="/courses"> <span className="course-link"> Courses </span></Link>
              </li>
              <li className="nav-Learning learning">
                <img className="nav-img" src="/img/brain.png" alt="learning"/>
                <Link className="nav-link" to= "/learning"><span className="learning-link"> Learning </span></Link>
              </li>
              
              <li className="signout-section">
              <Link className="nav-link" to="/contact"><button className="contact-btn">Contact us</button></Link>
              {
              currentUser ?
              <div className='option' to='/guru'   onClick={()=> auth.signin()}> Signin </div>
              :
              <Link className='signout-link' to='/'> Sign out </Link>
            }
                
              </li>
            </ul>
           
           

          </div>
        </div>
      </nav>
      </div>
      
      
    );

    

    

 
export default NavBar;