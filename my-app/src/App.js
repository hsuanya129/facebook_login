import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    
    return(
      <div>
        <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true"></div>
      </div>
    );
  }
}
export default App;
