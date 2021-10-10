import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import NavBar from "./components/navbar/navBar";
import Courses from "./components/courses /courses";
import Home from "./components/landingpage/index";
import Settings from "./components/settings/settings";
import Guru from "./components/guru/guru";
import Learning from "./components/learning/learning";
// import GlobalState from "./context/globalState";
import "./App.css";
// import Section from './components/section';


function App() {
  return (
    
    <BrowserRouter>
      <div>
      <NavBar />
        

        
        
        <Switch>
          <Route path="/index" exact compenent={Home}></Route>
          <Route path="/guru" exact component={Guru}></Route>
          <Route path="/courses" exact component={Courses}></Route>
          <Route path="/learning" exact component={Learning}></Route>
          <Route path="/settings" exact component={Settings}></Route> 
        </Switch>

       
      </div>
    </BrowserRouter>
   
  );
}

export default App;

// Admin

/// admin route
