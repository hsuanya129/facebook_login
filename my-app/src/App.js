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
      <div className='App'>
        <Login />
      </div>
    );
  }
}
export default App;
