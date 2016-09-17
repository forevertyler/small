import React, { PropTypes } from 'react'
import { hashHistory } from 'react-router';

class Work extends React.Component {
  workClick(){
    hashHistory.push('home')
  }
  render () {
    return(
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>...</p>
        <p><a className="btn btn-primary btn-lg"  role="button" onClick={this.workClick.bind(this)}>Go home</a></p>
      </div>
    )
  }
}

export default Work ;
