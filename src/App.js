import { BrowserRouter, Route, Switch,  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Lecture from "./components/lecture/lecture";
import Courses from "./components/courses /courses";
import Landing from "./components/landingpage/index";
import Login from "./components/login/login";
import Guru from "./components/guru/guru";
import Learning from "./components/learning/learning";
import Contact from "./components/contact/contact";
import Signup from "./components/signup/signup";
import "./App.scss";

function App() {
  return (
    
    <BrowserRouter>
    
     {/* <Route path="/:page" component={NavBar } /> */}

      <div>  
        <Switch>
          <Route path="/guru" exact component={Guru} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/learning" exact component={Learning} />
          <Route path="/login" extact component={Login} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/lecture" exact component={Lecture} />
          <Route component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
   
  );
}

export default App;

// Admin

/// admin route
