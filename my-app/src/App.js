import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  //將設定圖形化加入，選入需求的info
  render(){
    
    return(
      <div>
        <div className="fb-login-button" onlogin="checkLoginState();" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="true"></div>
      </div>
    );
  }
}
export default App;
