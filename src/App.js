import { BrowserRouter, Route, Switch,  } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Lecture from "./components/lecture/lecture";
import Courses from "./components/courses /courses";
import Landing from "./components/landingpage/index";
import SignInSignUp from "./components/login-signup/login-signup";
import Guru from "./components/guru/guru";
import Learning from "./components/learning/learning";
import Contact from "./components/contact/contact";

import "./App.scss";


const App = () => {

    return (
      
      <BrowserRouter>
      
       {/* <Route path="/:page" component={NavBar } /> */}
  
        <div >    
          <Switch>
            <Route path="/guru" exact component={Guru} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/learning" exact component={Learning} />
            <Route path="/contact" exact component={Contact} />
            <Route path ='/login-signup' exact component ={SignInSignUp} />
            <Route path="/lecture" exact component={Lecture} />
            <Route component={Landing} />
          </Switch>
          

        </div>
      </BrowserRouter>
     
    );

  }


export default App;


/// admin 
