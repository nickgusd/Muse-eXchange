import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../src/pages/Home';
import Profile from './pages/Profile';
import NoMatch from "../src/pages/NoMatch";
import login from "./components/login"
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile/:username" render={(props) => <Profile {...props} />}/>
          <Route path="/login" component={login} />          
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
