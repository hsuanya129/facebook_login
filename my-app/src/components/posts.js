import React from 'react';
import Post from './post'

class Posts extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    
    return(
      <div>
        <Post/>
      </div>
    );
  }
}
export default Posts;