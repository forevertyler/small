import React, { PropTypes } from 'react'

class Blog extends React.Component {
  render () {
    console.log(this.props.params.title);
    return(
      <div>
        {this.props.params.title == "a" ? "this is page a":
          this.props.params.title == "b" ? "this is page b":
          this.props.params.title == "c" ? "this is page c":
          this.props.params.title == "d" ? "this is page d":
          this.props.params.title == "e" ? "this is page e":"NO content"
      }

      </div>

    )
  }
}

export default Blog;
