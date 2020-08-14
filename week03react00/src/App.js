import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      showing: 'askName'
    };
  }

  render() {
    let page;
    if(this.state.showing === 'askName'){
      page = (
      <div>
        <div>What is your name?</div>
        <input type='text' name='username' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}></input>
        <button onClick={(e) => this.setState({showing: ''})}>Click here</button>
      </div>
      );
    } else{
      page = (
      <div>
        Welcome {this.state.username}
      </div>
      );
    }
    return page;
  }
}

export default App;