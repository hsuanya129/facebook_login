import React from 'react';
import FB from 'fb';
import '../App.css';
import Posts from './posts';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts_data: [],
            hint:'',
        }
        //To activate its methods from outside(window)
        window.Login = this;
    }

    componentDidMount() {

        //Initialize
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '2858794564190467',
                cookie: true,
                status: true,
                xfbml: true,
                version: 'v3.3'
            });

            //Called at the fb initialization, to check if user has login or not
            window.FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    window.FB.api('/me', function (response) {
                        window.Login.setState({
                            hint:response.name
                        });
                    });
                    window.FB.api('/me/feed', function (response) {
                        window.Login.setState({
                            posts_data: response.data
                        });
                    });
                } else {
                    window.Login.setState({
                        posts_data: [],
                        hint:''
                    });
                }
            });

            //EventListener to check user login or logout, TODO: try to seperate repeated code into an independent function
            //Because login button can't call 'onlogin' in react
            window.FB.Event.subscribe('auth.statusChange', function (response) {
                if (response.status === 'connected') {
                    window.FB.api('/me', function (response) {
                        window.Login.setState({
                            hint:response.name
                        });
                    });
                    window.FB.api('/me/feed', function (response) {
                        window.Login.setState({
                            posts_data: response.data
                        });
                    });
                } else {
                    console.log("You're not login, please login")
                    window.Login.setState({
                        posts_data: [],
                        hint:''
                    });
                }
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
                    data-scope="public_profile,email,user_posts"
                    data-width=""
                    data-size="large"
                    data-button-type="login_with"
                    data-auto-logout-link="true"
                    data-use-continue-as="true">
                </div>
                <Posts data={this.state.posts_data} hint={this.state.hint} />
            </div>
        )
    }
}


export default Login;