import React, { PureComponent, createRef, memo, Component } from "react";
import ReactDOM from "react-dom";
import shallowCompare from "react-addons-shallow-compare";
import App from "./app";
import "./index.scss";

// // O(1) -> best performace
// // createRef -> to get html element

// // mounting
// // 1. constructor -> bind / set state base on props / make api calls for log -> calls only once
// // 2. getDerivedStateFromProps -> derive new state base on props && state
// // 3. render -> to render html
// // 4. componentDidMount -> load data on component load / to manipulate dom / register events

// // Props or State value change component rerender (function/class) Or On change of parent component
// // updating

// // getDerivedStateFromProps
// // shouldComponentUpdate
// // render
// // getSnapshotBeforeUpdate
// // componentDidUpdate

// // demounting
// // componentWillUnmount

// // error
// // 1. getDerivedStateFromError
// // 2. componentDidCatch

// const Test = memo(
//   ({ data }) => {
//     console.log("====================================");
//     console.log(data);
//     console.log("====================================");
//     return <div>{data}</div>;
//   },
//   (prevProps, nextProps) => {
//     return prevProps.data === nextProps.data;
//   }
// );

// const Test1 = memo(({ data }) => {
//   console.log("====================================");
//   console.log(data);
//   console.log("====================================");
//   return <div>{data}</div>;
// });

// class Test2 extends PureComponent {
//   state = {
//     count: 0,
//   };

//   copy = () => {
//     console.log("copied");
//   };

//   componentDidMount() {
//     document.addEventListener("copy", this.copy);
//     this.interval = setInterval(() => {
//       console.log("setInterval");
//       this.setState(({ count }) => ({ count: count + 1 }));
//     }, 1000);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("copy", this.copy);
//     clearInterval(this.interval);
//   }

//   render() {
//     if (this.state.count === 5) {
//       // Simulate a JS error
//       throw new Error("I crashed!");
//     }
//     return <h1>{this.state.count}</h1>;
//   }
// }

// class App extends Component {
//   headerRef = createRef();

//   constructor(props) {
//     super(props);
//     // console.log("constructor");
//     //   this.state = {
//     //     count: props.initCounter,
//     //   };
//     // console.log("====================================");
//     // console.log(document.getElementById("count"));
//     // console.log("====================================");
//     // on componenet load if want to log something u can write code here
//   }

//   state = {
//     count: 0,
//     str: "hello",
//     hasError: false,
//   };

//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps");
//     // console.log("getDerivedStateFromProps");
//     // console.log("props", props);
//     // console.log("state", state);
//     // console.log("====================================");
//     // console.log(document.getElementById("count"));
//     // console.log("====================================");
//     return {
//       count: state.count === 0 ? props.initCounter : state.count,
//     };
//   }

//   componentDidMount() {
//     // fetch data;
//     this.headerRef.current.style = "background-color:blue";
//     // document.addEventListener("copy", () => {
//     //   console.log("====================================");
//     //   console.log("copied");
//     //   console.log("====================================");
//     // });
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     //   if(this.props !== nextprops || this.state !== nextState) {
//     //       return true;
//     //   }
//     // return false;
//     return shallowCompare(this, nextProps, nextState);
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     return 1;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // manipulate dom
//     console.log(`snapshot value is ${snapshot}`);
//   }

//   componentWillUnmount() {}

//   //   constructor(props) {
//   //     super(props);
//   //     this.increase = this.increase.bind(this);
//   //     this.decrease = this.decrease.bind(this);
//   //   }

//   static getDerivedStateFromError(error) {
//     return {
//       hasError: !!error,
//     };
//   }

//   componentDidCatch(error, info) {
//     console.log(error);
//     console.log(info.componentStack);
//     // log error on server
//   }

//   clickMe = () => {
//     console.log("click me");
//     this.setState({ str: "How are you?" });
//   };

//   increase = () => {
//     console.log("increase");
//     // this.state.count += 1;
//     this.setState(({ count }) => ({ count: count + 1 }));
//   };

//   decrease = () => {
//     console.log("decrease");
//     this.setState(({ count }) => ({ count: count - 1 }));
//     // this.state.count -= 1;
//   };

//   render() {
//     console.log("render");
//     const { count, str, hasError } = this.state;
//     // if (hasError) {
//     //   return <h1>Something went wrong! try after some time</h1>;
//     // }

//     return (
//       <>
//         <div id="count" ref={this.headerRef}>
//           {count}
//         </div>
//         <button type="button" onClick={this.increase}>
//           +
//         </button>
//         <button type="button" onClick={this.decrease}>
//           -
//         </button>
//         <button type="button" onClick={this.clickMe}>
//           Click Me
//         </button>
//         <Test data="hello from App" />
//         <Test1 data="hello from App for test 1" />
//         {count > 5 && <Test2 />}
//       </>
//     );
//   }
// }

// Inheritance
// polimorphism
// Abstraction
// Encapsulation

ReactDOM.render(<App />, document.getElementById("root"));

// component
// 1. component name start with Capital letter
// 2. to use style use object -> use camelCase
// 3. instead class use className
// 4. return only 1 element from component
