import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      showRegister: true
    }
  }

  switchPage=()=>{
    console.log('switch')
    this.setState({showRegister:!this.state.showRegister})
  }

  render(){
    return (
      <div className="App">
        {this.state.showRegister ? 
          <Register/> : <Login/> 
        }
        <p onClick={this.switchPage} className='btn-switch' >
          {this.state.showRegister ? 'Login here.' : 'Register here.'}
        </p>      
      </div>
    );
  }
}

export default App;
