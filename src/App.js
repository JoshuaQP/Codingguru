import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import NavBar from "./components/navbar/navBar";
import Courses from "./components/courses /courses";
import Landing from "./components/landingpage/index";
import Settings from "./components/settings/settings";
import Guru from "./components/guru/guru";
import Learning from "./components/learning/learning";
import Contact from "./components/contact/contact";

import "./App.css";

function App() {
  return (
    
    <BrowserRouter>
    
     <Route path="/:page" component={NavBar } />

      <div>  
        <Switch>
          <Route path="/guru" exact component={Guru} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/learning" exact component={Learning} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/contact" exact component={Contact} />
          <Route component={Landing} />
        </Switch>

       
      </div>
    </BrowserRouter>
   
  );
}

export default App;

// Admin

/// admin route
