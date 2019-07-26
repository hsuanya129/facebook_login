import React from 'react';
import './App.css';
import Login from './components/login'

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    
    return(
      <div className='App'>
        <Login />
      </div>
    );
  }
}
export default App;
