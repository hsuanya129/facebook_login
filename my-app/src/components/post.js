import React from 'react';
import './../App.css'

class Post extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const date_temp = Date.parse(this.props.data.created_time);
    const date = new Date(date_temp);
    
    
    return(
      <div>
        <p className="from">{this.props.data.from.name}</p>
        <div className="content">
          {this.props.data.message}
          {(this.props.data.picture) ? <img src={this.props.data.picture}></img> : ""}
        </div>
        <p className="date">{date.toString()}</p>
      </div>
    );
  }
}
export default Post;