import React from 'react';
import Post from './post'

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let greeting;
    let data;

    if (this.props.status === 'connected') {
      greeting = "Hello " + this.props.user_name;
      if (this.props.data === 'no posts') {
        data = <p> You haven't posted anything yet.</p>;
      } else {
        data = this.props.data.map((item) => <Post key={item.id} data={item} />);
      }
    } else if (this.props.status === 'unknown'){
        greeting = "Login now! Email:aetsfmhjpu_1563950203@tfbnw.net/Password:22342467";
    } else if(this.props.status === 'not_authorized') {
        greeting = "Not authorized yet! Please hit the login button and continue with your account";
    }

    return (
      <div>
        <h1>{greeting}</h1>
        {data}
      </div>
    );
  }
}
export default Posts;