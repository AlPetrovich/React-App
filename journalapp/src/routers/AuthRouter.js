import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';


//Encargado de tener Login - Register
export const AuthRouter = () => {
  return (
    <div>
        <Switch>
            <Route exact path="/auth/login" component={ LoginScreen }></Route>
            <Route exact path="/auth/register" component={ RegisterScreen }></Route>
        
            <Redirect to="/auth/login"></Redirect>
        </Switch>
    </div>
  )
}
