import React from 'react';
import Post from './post'

//Handling posts area/ including in situation of denied permission 
class Posts extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let data;
    let btn;

    if (this.props.auth === 'connected') {
      if (this.props.permission === 'declined') {
        btn = <button onClick={this.props.reRequest}>Rerequest for Posts Showing</button>;
        data = `You have to grant us permission for posts first, click the button below to continue`;
      } else if (this.props.data === 'no posts') {
        data = "You haven't posted anything yet.";
      } else {
        data = this.props.data.map((item) => <Post key={item.id} data={item} />);
      }
    }
    return (
      <div>
        <div>{data}</div>
        {btn}
      </div>
    );
  }
}
export default Posts;