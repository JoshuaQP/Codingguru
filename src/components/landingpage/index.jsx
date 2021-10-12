import React, { Component } from 'react'
import './landing.css';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <nav className="landingpage-nav">
                    <div>
                <img className="nav-logo" src="/img/CodingGurus.png" alt="logo"/>
                    </div>

                    <div className="Landing-links"> 
                <Link className="nav-link" to="/signup"><button className="signup-btn">Sign up</button></Link>                  
                <Link className="nav-link" to="/login"><span  className="login-link "> Login  </span></Link>
                    </div>

                </nav>
                

            </div>
        )
    }
}

export default Landing;