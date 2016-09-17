import React, { PropTypes } from 'react'
import axios from 'axios'

class Aboutme extends React.Component {
  constructor(){
    super();
    this.state = {
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('http://api.github.com/users/forevertyler')
    .then((res) => {
      console.log(res);
      this.setState({
        data:res.data,
        wait:false
      })
    })

  }

  render () {
    let styles={
      backgroundColor:'#ccc',
      color:'red',
      fontSize:'40px'
    }
    return(
      <div>
        {
          this.state.wait ? <span style={styles}>正在加载。。。。</span> :
          <img src={this.state.data.avatar_url} />
        }
        <div>
          <div className="row">
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1" style={styles}>.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1" style={styles}>.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1" style={styles}>.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1" style={styles}>.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1" style={styles}>.col-md-1</div>
            <div className="col-md-1">.col-md-1</div>
            <div className="col-md-1" style={styles}>.col-md-1</div>
          </div>
          <div className="row">
            <div className="col-md-4 col-xs-12" style={styles}>.col-md-4</div>
            <div className="col-md-4 col-xs-12">sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="col-md-4 col-xs-12" style={styles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
          </div>
          <div className="row">
            <div className="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
            <div className="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
          </div>
        </div>
      </div>

    )
  }
}

export default Aboutme ;
