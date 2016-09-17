import React, { PropTypes } from 'react'
import {hashHistory} from 'react-router';

class Card extends React.Component {
  handleClick(){
    hashHistory.push(`/blog/${this.props.url}`)
  }
  render () {
    return(
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.img} />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.des}</p>
            <p><a className="btn btn-primary" role="button" onClick={this.handleClick.bind(this)}>Button</a> <a className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    )
  }
}
Card.defaultProps={
  img:"http://placehold.it/300x300",
  title:"first day",
  des:"des"
}

export default Card;
