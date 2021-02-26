import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector';
import Circles from './components/Circles';

class App extends Component {
  constructor(){
    super();
    this.state = {
      selButtonIdx: 0,
      selCircleIdx: 0    
  };
}
//need proper state
//need to setstate
//need onclick
//need to update state
  render() {
    return (
      <div className="App">
        {this.state.selector}
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector />
          <Circles />
        </main>
      </div>
    );
  }
}

export default App;
