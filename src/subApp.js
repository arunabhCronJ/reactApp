import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class SubApp extends Component{
    constructor(props){
        super(props)
        this.state={
            str: 'CRonj'
        }
        this.change = this.change.bind(this);
    }
    change(){
        this.setState({str: 'Accenture'});
    }
  render(){
    
    return (
      <div className="App">
        {this.state.str}
        <button onClick={this.change}>Click Me</button>
        <div>This is react class</div>
      </div>
    );
  }
}

export default SubApp;
