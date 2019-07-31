import React from 'react';
import './../App.css'

//Handling single post
class Post extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const date_temp = Date.parse(this.props.data.created_time);
    const date = new Date(date_temp);
    const formatContent =(this.props.data.message) ? this.props.data.message.replace(/↵/, '<br/>') :"";
    
    return(
      <div>
        <p className="from">{(this.props.data.from) ? this.props.data.from.name : "By friend"}</p>
        <pre className="content">
          {formatContent}
          <br/>
          {(this.props.data.full_picture) ? <img className="full_picture" src={this.props.data.full_picture}></img> : ""}
        </pre>
        <p className="date">{date.toString()}</p>
      </div>
    );
  }
}
export default Post;