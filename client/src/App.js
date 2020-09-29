import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../src/pages/Home';
import Profile from './pages/Profile';
import NoMatch from "../src/pages/NoMatch";
import login from "./components/login/Index"
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Broadway from './components/broadway';
import Dancers from './components/dancers'
import Actors from './components/actors';
import Musicians from './components/musicians'
// import './App.css';

function App() {
  return (
    <div>
      {/* <Dancers/>
    <Musicians/>
    <Actors/>
    <Broadway/> */}
    <Router>
      {/* <Navbar /> */}
      <div className="wrapper">
        <Switch>
          <Route exact path="/" >
          <Dancers/>
    <Musicians/>
    <Actors/>
    <Broadway/>
            </Route>
          <Route path="/profile/:username" render={(props) => <Profile {...props} />}/>
          <Route path="/login" component={login} />          
          <Route component={NoMatch} />
        </Switch>
      </div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
