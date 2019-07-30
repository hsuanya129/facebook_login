import React from 'react';
import Post from './post'

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let greeting;
    let data;

    if (this.props.auth === 'connected') {
      greeting = "Hello " + this.props.user_name;
      if(this.props.permission === 'declined'){ 
        data =  "You have to grant us permission for posts first";
      }else if (this.props.data === 'no posts') {
        data =  "You haven't posted anything yet.";
      } else {
        data = this.props.data.map((item) => <Post key={item.id} data={item} />);
      }
    } else if (this.props.auth === 'unknown'){
        data = `Login now! Email:aetsfmhjpu_1563950203@tfbnw.net/Password:22342467 \n without auth:not_wsoriwe_karen@tfbnw.net \n without permission:no_huivpgp_abigail@tfbnw.net`;
    } else if(this.props.auth === 'not_authorized') {
        greeting = "Not authorized yet! Please hit the login button and continue with your account";
    }

    return (
      <div>
        <h1>{greeting}</h1>
        <pre>{data}</pre>
      </div>
    );
  }
}
export default Posts;