import React from 'react'
import './App.css';

import { BrowserRouter as Switch, Route } from 'react-router-dom'
// import { Router } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import Main from './pages/Main'
import Daily from './pages/Daily'
import Check from './pages/Check'
import Exit from './pages/Exit'
import Tel from './pages/Tel'
import Stat from './pages/Stat'
import Recommend from './pages/Recommend'
import Site from './pages/Site'

// import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/test" component={Daily}/>
            <Route path="/check" component={Check}/>
            <Route path="/exit" component={Exit}/>
            <Route path="/tel" component={Tel}/>
            <Route path="/stat" component={Stat}/>
            <Route path="/recommend" component={Recommend}/>
            <Route path="/site" component={Site}/>        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
