import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
// import App from "./app";
// import "./index.scss";

// mounting
// 1. constructor
// 2. getDerivedStateFromProps
// 3. render
// 4. componentDidMount

// updating

// demounting

// error

class App extends Component {

 

  state = {
    seconds :0,
    minutes :0
  }

  

  addMins = () =>{
    this.setState(({minutes}) => ({minutes: minutes + 1}));
  }

  addSecs = () => {
    this.setState(({ seconds }) => ({ seconds: seconds + 1 }));
  };

  constructor(props){
    super(props);
    this.timer = 0;
    this.addSecs = this.addSecs.bind(this);
    this.addMins = this.addMins.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  startTimer= () => {
    console.log("started");
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  };

  countDown = () => {
    let seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds,
    });
    
    if (seconds == 0) { //because it goes past 0
      clearInterval(this.timer);
    }
  };
  
  render() {
    console.log("render");
    const {minutes,seconds} = this.state;
    return (
      <div>
        <div id="nums" ref={this.numRef}>
          {minutes}:{seconds}
        </div>
        <button onClick={this.addMins}>Add Minutes</button>
        <button onClick={this.startTimer} >Start</button>
        <button onClick={this.addSecs} >Add Seconds</button>
      </div>

    
    );
  }
}

// Inheritance
// polimorphism
// Abstraction
// Encapsulation

ReactDOM.render(<App/>, document.getElementById("root"));

// component
// 1. component name start with Capital letter
// 2. to use style use object -> use camelCase
// 3. instead class use className
// 4. return only 1 element from component
