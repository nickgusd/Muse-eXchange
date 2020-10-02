import React from "react";
import {Redirect, Route} from "react-router-dom";


function ProtectedRoutes({user,pending, ...rest}){
  console.log(rest)
  return (
    !user && !pending ? <Redirect to="/auth"/> : 
    <Route {...rest}/>
  )
}

export default ProtectedRoutes