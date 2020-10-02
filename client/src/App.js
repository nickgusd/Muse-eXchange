import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../src/pages/Home';
import Profile from './pages/Profile';
import NoMatch from "../src/pages/NoMatch";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Profilepage from "./pages/Profilepage"
import Payment from "./pages/Payment"
import Team from './pages/Team';


// import './App.css';import API from '../../utils/API';



function App() {
  const [user, setUser] = useState();
  console.log(user)
 
  return (
    <Router>
      <Navbar />
      
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/">
            {!user ? <h1>Is Loading...</h1> : <Home />}
          </Route> */}
          {/* <Route path="/profile/:username" render={(props) => <Profile {...props} />}/> */}
          <Route path="/profile/:username" render={(props) => <Profilepage {...props} />}/>
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Login} />
          {/* <Route path="/login">
              <Login  setUser={setUser}/>
          </Route>     */}
          <Route path="/pages/Payment/:title/:price" component={Payment}/>  
          <Route path="/team">
            <Team user={user}/>
            </Route>        
          <Route component={NoMatch} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
