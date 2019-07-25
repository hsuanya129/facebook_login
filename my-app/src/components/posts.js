import React from 'react';
import Post from './post'

class Posts extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.data)
    const data=''
    // const data = this.props.data.map((item)=><Post data={item} />)
    return(
      <div>
        {data}
      </div>
    );
  }
}
export default Posts;