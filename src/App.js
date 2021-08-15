import React from 'react'
import './App.css';
import Bar from './components/Bar'
import Basic from './components/Basic'
import Footer from './components/Footer'

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Router } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom';
// import Homes from './pages/Homes'
// import Products from './pages/Products'
// import Reports from './pages/Reports'

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Bar />
        <Basic />
        <Footer />
      </Router>

      {/* <Router>
        <Switch>
            <Route path="/" exact component={Homes}/>
            <Route path="/products" component={Products}/>
            <Route path="/reports" component={Reports}/>
        </Switch>
      </Router> */}

    </div>

    // <img src="./logo.png" />
    // <div className="App">
    //     <h1>고려대학교</h1>
    // </div>
  );
}

export default App;
