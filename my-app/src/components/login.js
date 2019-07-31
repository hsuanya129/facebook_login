import React from 'react';
import '../App.css';
import Posts from './posts';
import Greet from './greet';

//Handling page that including facebook login function
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts_data: [],
            user_name: '',
            auth: '', //authentication of app using Facebook login
            permission: '' //data access to user_posts
        };
    }

    //connected/not_auth/unknown
    getAuth = (response) => {
        this.setState({
            auth:response.status
        });
    }

    //test permission of certain data access (e.g. eamil, posts, friends), and return declined/granted
    permitTest = (category) => {
        window.FB.api('/me/permissions', 'GET', (response) => {
            let permission = response.data.find((item) => item.permission === category).status;
            this.setState({
                permission
            });
            return permission;
        });
    }

    //get the name of user, for greeting
    getName = () => {
        window.FB.api(`/me`, (response) => {
            this.setState({
                user_name: response.name
            });
        });
    }

    //get posts data of user
    getPosts = () => {
        window.FB.api(`/me`, 'GET', { "fields": "feed{full_picture,created_time,message,from}" }, (response) => {
            let posts;
            (response.feed) ? posts = response.feed.data : posts = "no posts";
            this.setState({
                posts_data: posts
            });
        });
    }

    //for denied permission re-request permission again
    reRequest = () => {
        window.FB.login((response) => {
        }, {
            scope: 'user_posts',
            auth_type: 'rerequest'
          });
    }

    
    //Integrate the methods of above to form a fetchPosts method
    fetchPosts = (response) => {
        this.getAuth(response);

        if (response.status === 'connected') {
            this.getName();

             if (this.permitTest('user_posts') === 'declined'){
                return;
             } else {
                this.getPosts();
             }

        //for authentication equals unknown or not_authorized
        } else {
            this.setState({
                posts_data: [],
                user_name: ''
            });
        }
    }

    componentDidMount() {
        //Initialize
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: '2858794564190467',
                cookie: true,
                status: true,
                xfbml: true,
                version: 'v3.3'
            });

            //Called at the fb initialization, to check if user has login or not
            window.FB.getLoginStatus((response) => { //Using arrowfunction to bind 'this' with component
                this.fetchPosts(response);
            });

            //Called when user's accessToken changes
            window.FB.Event.subscribe('auth.authResponseChange', (response) => {
                this.fetchPosts(response);
            });

            //EventListener to check user login or logout,
            //Because login button can't using 'onlogin' property in react
            window.FB.Event.subscribe('auth.statusChange', (response) => {
                this.fetchPosts(response);
            });
        };

        //Part of initializaion of fb
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/zh_TW/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


    }

    render() {
        return (
            <div>
                <div
                    className="fb-login-button"
                    data-scope="public_profile,email,user_posts"
                    data-width=""
                    data-size="large"
                    data-button-type="login_with"
                    data-auto-logout-link="true"
                    data-use-continue-as="true">
                </div>
                <Greet auth={this.state.auth} user_name={this.state.user_name}/>
                <Posts data={this.state.posts_data} auth={this.state.auth} permission={this.state.permission} reRequest={this.reRequest}/>
            </div>
        )
    }
}


export default Login;