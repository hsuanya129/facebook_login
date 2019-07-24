import React from 'react';
import './App.css';
import Login from './components/login'
import Posts from './components/posts'

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    
    return(
      <div>
      <p>Hi</p>
        <Login />
        <Posts />
      </div>
    );
  }
}
export default App;
