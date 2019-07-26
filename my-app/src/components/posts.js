import React from 'react';
import Post from './post'

class Posts extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var greeting;
    (this.props.hint === '') ? greeting="Login now! Email:aetsfmhjpu_1563950203@tfbnw.net/Password:22342467" : greeting="Hello "+this.props.hint;

    const data = this.props.data.map((item)=><Post key={item.id} data={item} />);
    return(
      <div>
        <h1>{greeting}</h1>
        {data}
      </div>
    );
  }
}
export default Posts;