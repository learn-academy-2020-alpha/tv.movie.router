import React, {Components} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import "./App.css"

import Home from "./Components/Home"
import TV from "./Components/TV"
import Details from "./Components/Details"

// class App extends Components {
//   constructor () {
//     super()
//     this.state = {
      
//     }
//   }
// }

const TVApp = () => {
  return (
      <Router>
          <div>
              <h1>Fav TV Shows</h1>
              
              <nav>
                  <ul>
                  <li>
                      
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/TV/">TV</Link>
                  </li>
                  <li>
                      <Link to="/Details">Details</Link>
                  </li>
                  </ul>
              </nav>
                <Route path="/" exact components={ Home } />
                <Route path="/TV/" exact components={ TV } />
                <Route path="/Details/" exact components={ Details } />
            </div>
        </Router>
    )
}



export default TVApp;
