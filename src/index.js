import {
  ButtonGroup,
  Button,
  
} from "@material-ui/core";
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
  headerRef = createRef();

  constructor(props) {
    super(props);
    console.log("constructor");
    //   this.state = {
    //     count: props.initCounter,
    //   };
    console.log("====================================");
    console.log(document.getElementById("count"));
    console.log("====================================");
    // on componenet load if want to log something u can write code here
  }

  state = {
    count: 0,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    console.log("props", props);
    console.log("state", state);
    console.log("====================================");
    console.log(document.getElementById("count"));
    console.log("====================================");
    return {
      count: state.count === 0 ? props.initCounter : state.count,
    };
  }

  componentDidMount() {
    // fetch data;
    // this.headerRef.current.style = "background-color:skyblue"
    document.addEventListener("copy", () => {
      console.log("====================================");
      console.log("copied");
      console.log("====================================");
    });
  }

  //   constructor(props) {
  //     super(props);
  //     this.increase = this.increase.bind(this);
  //     this.decrease = this.decrease.bind(this);
  //   }

  clickMe() {
    console.log("click me");
  }

  increase = () => {
    console.log("increase");
    // this.state.count += 1;
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  decrease = () => {
    console.log("decrease");
    this.setState(({ count }) => ({ count: count - 1 }));
    // this.state.count -= 1;
  };

  reset = () => {
    console.log("reset");
    this.setState(({ count }) => ({ count: count = 0 }));
    // this.state.count = 0;
  };

  

  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <>
        <div style={{backgroundColor:"skyblue", textAlign:"center", borderRadius:"5px", width:"50%",  margin:"auto", marginBottom:10}} id="count" //ref={this.headerRef}
        >
          {count}
        </div>
        
      

  <ButtonGroup style={{ display: "flex", justifyContent: "center" }} size="large" color="primary" aria-label="large outlined primary button group">
  <Button  type="button" onClick={this.increase}>+</Button>
  <Button type="button" onClick={this.decrease}>-</Button>
  <Button type="button" onClick={this.reset}>Reset</Button>
</ButtonGroup>
        
      </>
    );
  }
}

// Inheritance
// polimorphism
// Abstraction
// Encapsulation

ReactDOM.render(<App initCounter={0} />, document.getElementById("root"));

// component
// 1. component name start with Capital letter
// 2. to use style use object -> use camelCase
// 3. instead class use className
// 4. return only 1 element from component
