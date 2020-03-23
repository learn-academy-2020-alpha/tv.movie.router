

import React, { Component } from "react"


class TVshow extends Component{
  render(){
    // Accessing the id from the URL
    const { id } = this.props.match.params
    // Using .find() to return the correct object from the data set
    const tvshow = this.props.tvshows.find((tvshow) => tvshow.id === parseInt(id))
    return(
      <React.Fragment>
        <div>
          <h3>{ tvshow.name }</h3>
          <p>{ tvshow.details }</p>
        </div>
      </React.Fragment>
    )
  }
}


export default TVshow
