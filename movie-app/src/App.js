import React, {Component} from 'react'
import './App.css';
import TVshows from "./Components/TVshows"
import tvshows from "./store/tvshows"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"



class App extends Component {
  constructor () {
    super()
    this.state = {
      allShows: tvshows
    }
  }

render (){
  return (
    <React.Fragment>
      <Router>
          <div>
            <h1>Fav TV Shows</h1>
            <nav>
            <ul>
               { this.state.allShows.map((tvshow, index) =>
               <li key={ index }>
                 <Link to={ `/tvshows/${tvshow.id}` }>
                   { tvshow.name }
                 </Link>
               </li>
               )}

              </ul>
              </nav>

              <Switch>
                  <Route
                    path="/tvshows/:id"
                    render={ (props) => <TVshows {...props} TVshows={ this.state.allShows } /> }
                  />
              </Switch>



            </div>
        </Router>
        </React.Fragment>
    )
  }
}



export default App;
