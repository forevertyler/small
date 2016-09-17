import React, { PropTypes } from 'react';

import { Link } from 'react-router';

class NavBar extends React.Component {
  render () {
    return(
      <div>
        <nav className="navbar navbar-inverse" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              Tyler
            </div>
            <div className="navbar-header">
              <Link className="navbar-brand" to='/'>
              HOME
              </Link>
            </div>
            <div className="navbar-header">
              <Link className="navbar-brand" to='/work'>
              WORK
              </Link>
            </div>
            <div className="navbar-header">
              <Link className="navbar-brand" to='/aboutme'>
              ABOUTME
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar ;
