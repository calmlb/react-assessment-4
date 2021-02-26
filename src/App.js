import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector';
import Circles from './components/Circles';

class App extends Component {
  constructor(){
    super();
    this.state = {
      circle1: true,
      circle2: true,
      circle3: true,
      circle4: true,
  };
}

  handleClick = (circleNum) => {
    this.setState({circle1: circleNum === 1, circle2: circleNum === 2, circle3: circleNum === 3, circle4: circleNum === 4})
  }
//To do On Sat am.
//in the morning i can fork it and remove 
//the custom classes and build the state as
//circle, create an updateCircle function, then
//add the updateCircle function as part of the onclick in the button

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector onClick={this.handleClick.bind(this) }/>
          <Circles {...this.state}/>
        </main>
      </div>
    );
  }
}

export default App;
