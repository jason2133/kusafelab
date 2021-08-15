import React from 'react'
import './App.css';
import Bar from './components/Bar'
import Basic from './components/Basic'
import Footer from './components/Footer'

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom';
// import Homes from './pages/Homes'
// import Products from './pages/Products'
// import Reports from './pages/Reports'

function App() {
  return (
    <div>
      <Bar />
      <Basic />
      <Footer />

      {/* <BrowserRouter>
        <Route path="/Home" component={Homes}/>
        <Route path="/product" component={Products}/>
        <Route path="/about" component={Reports}/>
      </BrowserRouter> */}
    </div>

    // <img src="./logo.png" />
    // <div className="App">
    //     <h1>고려대학교</h1>
    // </div>
  );
}

export default App;
