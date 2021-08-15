import React from 'react'
import './App.css';
import Bar from './components/Bar'
import Basic from './components/Basic'
import Footer from './components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homes from './pages/Homes'
import Reports from './pages/Reports'
import Products from './pages/Products'

function App() {
  return (
    <div>
      <Router>
        <Bar />
        <Switch>
          <Route path='/homes' component={Homes} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    
      <Basic />
      <Footer />
    </div>

    // <img src="./logo.png" />
    // <div className="App">
    //     <h1>고려대학교</h1>
    // </div>
  );
}

export default App;
