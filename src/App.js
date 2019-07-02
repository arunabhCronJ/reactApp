import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SubApp from './subApp'

class App extends Component{
  alertMe(){
    alert('str');
  }
  render(){
    let str ="Accenture"
    return (
      <SubApp company={str}
      alertMe={this.alertMe}
      />
    );
  }
}

export default App;
