import React from 'react'
import {
    Switch,
    Route,Redirect
  } from "react-router-dom";
import Dashboard from '../components/dashboard';
import Jobs from '../components/jobs';
import Login from '../components/login';
import  UserContext  from '../UserContext';
export default function Pages() {
    return (
        <div>
            <Switch>
                 <Redirect exact from="/" to="/home" />
                <UserContext.Provider value={{auth:false}}>
                <Route exact path="/home" component={Dashboard}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path='/jobs' component={Jobs}/>

                </UserContext.Provider>
            </Switch>
        </div>
    )
}
