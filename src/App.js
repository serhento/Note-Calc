import React from 'react';
import {Notes} from "./components/note/Notes";
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {Calc} from "./components/calc/Calc";
import {Navbar} from "./components/Navbar";
import {FirebaseState} from "./components/context/firebase/firebaseState";

export const App =()=>{

  return (
      <FirebaseState>
          <Router>
              <Navbar/>
              <div className='container'>
                  <Switch>
                      <Route  path={'/notes'} component={Notes}/>
                      <Route path={'/calc'} component={Calc}/>
                  </Switch>
              </div>
          </Router>
      </FirebaseState>
  );
};
