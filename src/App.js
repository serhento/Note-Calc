import React from 'react';
import {Notes} from "./components/note/Notes";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Calc} from "./components/calc/Calc";
import {Navbar} from "./components/Navbar";

export const App =()=>{

  return (
      <Router>
          <Navbar/>
        <div className='container'>
            <Switch>
                <Route  path={'/notes'} component={Notes}/>
                <Route path={'/calc'} component={Calc}/>
            </Switch>
        </div>
      </Router>
  );
};
