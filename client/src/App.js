import React, {useEffect} from 'react';
// import SiteContainer from "./components/SiteContainer";
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
import "./pages/Assets/style.css";
import Nav from "./components/Nav.jsx";
import Projects from "./pages/Projects.jsx"

// const App = () => <SiteContainer />;

function App() {
  useEffect(()  =>  {
    axios.get("/api/config").then(response => {
      console.log(response.data)
    })
}, [])
return (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      {/* <Route exact path="/about" component={About}/> */}
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/projects" component={Projects}/>
    </Switch>
  </Router>
);
}



export default App;
