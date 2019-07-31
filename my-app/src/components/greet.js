import React from 'react';
import './../App.css'

//Handling greeting area, show wether user has authorized/logged in this app or not
class Greet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let greeting;

        if (this.props.auth === 'connected') {
            greeting = "Hello " + this.props.user_name;
        } else if (this.props.auth === 'unknown') {
            greeting = <pre> {`Login now! Email:aetsfmhjpu_1563950203@tfbnw.net/Password:22342467 \n without auth:idzigqreqs_1564542964@tfbnw.net \n without permission:evjzaxrwiv_1564542981@tfbnw.net`}</pre>;
        } else if (this.props.auth === 'not_authorized') {
            greeting = "Not authorized yet! Please hit the login button and continue with your account";
        }


        return (
            <div>
                <h1>{greeting}</h1>
            </div>
        )
    }
}

export default Greet;