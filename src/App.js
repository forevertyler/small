import React, { PropTypes } from 'react'

import NavBar from './component/NavBar'

class App extends React.Component {
  render () {
    return(
      <div>

        <NavBar />
        {this.props.children}
      </div>
    )
  }
}

export default App;
