import React, {useEffect} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./containers/Home/Home.jsx";

function App() {
  useEffect(()  =>  {
    axios.get("/api/config").then(response => {
      console.log(response.data)
    })
}, [])
return (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </Router>
);
}



export default App;
