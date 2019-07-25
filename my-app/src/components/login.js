import React from 'react';
import FB from 'fb';
import '../App.css';
import Posts from './posts';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts_data: '',
        }

    }
    componentDidMount() {
        //initialize
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '2858794564190467',
                cookie: true,
                status: true,
                xfbml: true,
                version: 'v3.3'
            });

            //called at the fb initialization 
            window.FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    window.FB.api('/me', function (response) {
                        console.log(JSON.stringify(response));
                    });
                    window.FB.api('/me/feed', function (response) {
                        const posts = response.data;
                        for (let post of posts) {
                            console.log(post)
                        }
                    });
                } else {
                    console.log("You're not login, please login")
                }
            });

            //eventListener to user login or logout, TODO: try to seperate repeated code into a independent function
            window.FB.Event.subscribe('auth.statusChange', function (response) {
                if (response.status === 'connected') {
                    window.FB.api('/me', function (response) {
                        console.log(JSON.stringify(response));
                    });
                    window.FB.api('/me/feed', function (response) {
                        const posts = response.data;
                        for (let post of posts) {
                            console.log(post)
                        }
                        // Login.setState({
                        //     posts_data: posts
                        // });
                    });
                } else {
                    console.log("You're not login, please login")
                }
            })
        };

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
                <Posts data={this.state.posts_data} />
            </div>
        )
    }
}


export default Login;