import React from 'react';
import '../App.css';
import Posts from './posts';


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


    //Detect if connected or not, and save data of posts into this.state
    fetchPosts = (response) => {
        this.setState({
            auth: response.status
        });

        if (response.status === 'connected') {

            window.FB.api(`/me`, (response) => {
                this.setState({
                    user_name: response.name
                });
            });

            window.FB.api('/me/permissions', 'GET', (response) => {
                console.log(response);
                let permission = response.data.find((item) => item.permission === 'user_posts').status;
                this.setState({
                    permission
                });

                if (permission === 'declined') {
                    return;
                } else {
                    window.FB.api(`/me`, 'GET', { "fields": "feed{full_picture,created_time,message,from}" }, (response) => {
                        let posts;
                        (response.feed) ? posts = response.feed.data : posts = "no posts";
                        this.setState({
                            posts_data: posts
                        });
                    });
                }
            });

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

            //EventListener to check user login or logout,
            //Because login button can't call 'onlogin' in react
            window.FB.Event.subscribe('auth.statusChange', (response) => {
                this.fetchPosts(response);
            })
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
                    data-scope="public_profile,email,user_posts" //it works
                    data-width=""
                    data-size="large"
                    data-button-type="login_with"
                    data-auto-logout-link="true"
                    data-use-continue-as="true">
                </div>
                <Posts data={this.state.posts_data} user_name={this.state.user_name} auth={this.state.auth} permission={this.state.permission} reGrant={this.fetchPosts}/>
            </div>
        )
    }
}


export default Login;