import FB from 'fb';
import React from 'react';

class ServiceFB extends React.Component {

    componentDidMount(){
        Window.parent.fbAsyncInit = function () {
            FB.init({
                appId: '2858794564190467',
                cookie: true,
                status: true,
                xfbml: true,
                version: 'v3.3'
            });
            // FB.AppEvents.logPageView();

            FB.getLoginStatus(function (response) {
                this.statusChangeCallback(response);
            });

        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/zh_TW/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }
    

    statusChangeCallback(response) {
        if (response.status === 'connected') {
            FB.api('/me', function (response) {
                console.log(JSON.stringify(response));
            });
            FB.api('/me/feed', function (response) {
                const posts = response.data;
                for (let post of posts) {
                    console.log(post)
                }
            });

            // console.log(response.authResponse.accessToken)
            // console.log(response.authResponse.userID)
        } else {
            console.log("You're not login, please login")
        }
    }

    checkLoginState() {
        FB.getLoginStatus(function (response) {
            this.statusChangeCallback(response);
        });
    }
}

export default ServiceFB;