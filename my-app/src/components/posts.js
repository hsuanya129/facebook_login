import React from 'react';
import Post from './post'

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  //fired when user didn't agree the permission of user_posts, and clicked rerequest button 
  reRequest = () => {
    window.FB.login((response) => {
      this.props.reGrant(response);
    }, {
      scope: 'user_posts',
      auth_type: 'rerequest'
      });

  }

  render() {
    let greeting;
    let data;
    let btn;

    if (this.props.auth === 'connected') {
      greeting = "Hello " + this.props.user_name;
      if (this.props.permission === 'declined') {

        btn = <button onClick={this.reRequest}>Rerequest</button>
        data = `You have to grant us permission for posts first, click the button below to continue`;
      } else if (this.props.data === 'no posts') {
        data = "You haven't posted anything yet.";
      } else {
        data = this.props.data.map((item) => <Post key={item.id} data={item} />);
      }
    } else if (this.props.auth === 'unknown') {
      data = <pre> {`Login now! Email:aetsfmhjpu_1563950203@tfbnw.net/Password:22342467 \n without auth:not_wsoriwe_karen@tfbnw.net \n without permission:no_huivpgp_abigail@tfbnw.net`}</pre>
    } else if (this.props.auth === 'not_authorized') {
      data = "Not authorized yet! Please hit the login button and continue with your account";
    }

    return (
      <div>
        <h1>{greeting}</h1>
        <div>{data}</div>
        {btn}
      </div>
    );
  }
}
export default Posts;