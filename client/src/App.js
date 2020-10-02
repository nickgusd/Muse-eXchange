import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from '../src/pages/Home';
import Profile from './pages/Profile';
import NoMatch from "../src/pages/NoMatch";
import AccountPage from './pages/AccountsPage';
import AccountPage_Demo from './pages/AccountsPage_Demo';
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Profilepage from "./pages/Profilepage"
import Payment from "./pages/Payment"
import Team from './pages/Team';
// import './App.css';import API from '../../utils/API';



function App() {
  const [user, setUser] = useState();
  const [pending, setPending] = useState(true)
  useEffect(()=> {
    if(localStorage.getItem("currentUser")){
      setUser(JSON.parse(localStorage.getItem("currentUser")));
    }
    setPending(false)
  },[])

  const handleSetCurrentUser = user => {
    console.log(user)
    setUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  const handleLogout = () => {
    handleSetCurrentUser(null)
  }

  console.log(user)
 
  return (
    <Router>
      <Navbar handleLogout={handleLogout}/>
      {user && <Redirect to="/"/>}
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={() => <Home pending={pending} user={user}/>} />
          {/* <Route exact path="/">
            {!user ? <h1>Is Loading...</h1> : <Home />}
          </Route> */}
          {/* <Route path="/profile/:username" render={(props) => <Profile {...props} />}/> */}
          <Route path="/profile/:username" render={(props) => <Profilepage {...props}/>}/>
          {/* <Route path="/account" component={AccountPage_Demo} /> */}
          <Route path="/account" component={() => <AccountPage_Demo pending={pending} user={user._id}/>} />
          <Route path="/auth" component={() => <Login handleSetCurrentUser={handleSetCurrentUser}/>} />
          <Route path="/pages/Payment/:title/:price" component={Payment}/>  
          <Route path="/team">
            <Team user={user}/>
            </Route>        
          <Route component={() => <Login handleSetCurrentUser={handleSetCurrentUser}/>} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
