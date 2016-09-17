import React, { PropTypes } from 'react'
import Card from './component/card'

class Home extends React.Component {
  render () {
    let data = [
      {img:'http://placehold.it/300x300',title:"1st day",des:"1111",url:"a"},
      {img:'http://placehold.it/300x200',title:"2ed day",des:"2222",url:"b"},
      {img:'http://placehold.it/200x200',title:"3th day",des:"333",url:"c"},
      {img:'http://placehold.it/300x200',title:"4th day",des:"444",url:"d"},
    ]
    return(
      <div className="row">
        {data.map((item,i) => (<Card {...item} key={i} />))}

      </div>

    )
  }
}

export default Home ;
