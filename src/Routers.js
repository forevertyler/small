import React, { PropTypes } from 'react'

import {Router,Route,browserHistory,hashHistory,IndexRoute} from 'react-router';

import App from './App';
import Aboutme from './Aboutme';
import Work from './Work';
import Home from './Home';
import Blog from './blog';

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/aboutme" component={Aboutme}/>
          <Route path="/work" component={Work}/>
          <Route path="/home" component={Home}/>
          <Route path="/blog/:title" component={Blog}/>

        </Route>
      </Router>
    )
  }
}

export default Routers;
