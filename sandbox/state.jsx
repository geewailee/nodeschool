// https://reactjs.org/docs/state-and-lifecycle.html
// State & Lifecycle

// Tick
// https://codepen.io/pen?&editable=true&editors=0010

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

// In this section,
// we will learn how to make the Clock component truly reusable and encapsulated.

// It will set up its own timer and update itself every second.

// We can start by encapsulating how the clock looks:

// https://codepen.io/gaearon/pen/dpdoYR?editors=0010

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
}

setInterval(tick, 1000);

// However, it misses a crucial requirement:
// the fact that the Clock sets up a timer and updates the UI every second
// should be an implementation detail of the Clock.

// Ideally we want to write this once and have the Clock update itself:
ReactDOM.render(<Clock />, document.getElementById('root'));

// To implement this, we need to add “state” to the Clock component.

// State is similar to props, but it is private and fully controlled by the component.

// Converting a Function to a Class

// You can convert a function component like Clock to a class in five steps:

//     Create an ES6 class, with the same name, that extends React.Component.
//     Add a single empty method to it called render().
//     Move the body of the function into the render() method.
//     Replace props with this.props in the render() body.
//     Delete the remaining empty function declaration.

// https://codepen.io/gaearon/pen/zKRGpo?editors=0010

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// Clock is now defined as a class rather than a function.

// The render method will be called each time an update happens,
// but as long as we render <Clock /> into the same DOM node,
// only a single instance of the Clock class will be used.
// This lets us use additional features such as local state and lifecycle methods.

// 1. Replace this.props.date with this.state.date in the render() method:

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>      
    </div>
    );
  }
}

// 2. Add a class constructor that assigns the initial this.state:

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// Note how we pass props to the base constructor:

constructor(props) {
  super(props);   
  this.state = {date: new Date()};
}

// Class components should always call the base constructor with props.

// 3. Remove the date prop from the <Clock /> element:

ReactDOM.render(
  <Clock />,  document.getElementById('root')
);

// We will later add the timer code back to the component itself.

// The result looks like this:

// https://codepen.io/gaearon/pen/KgQpJd?editors=0010

class Clock extends React.Component {
  constructor(props) {    
      super(props);    
      this.state = {date: new Date()};  
  }
  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>      
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,  document.getElementById('root')
);

// next after original
// https://codepen.io/gaearon/pen/gwoJZk?editors=0010

function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  function tick() {
    ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);

// original 

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);



//   adding lifestyle methods to a class

//   We want to set up a timer whenever the Clock is rendered to the DOM for the first time. 
// This is called “mounting” in React.

// We also want to clear that timer whenever the DOM produced by the Clock is removed. 
// This is called “unmounting” in React.

// We can declare special methods on the component class to run some code 
// when a component mounts and unmounts:

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {  }
    componentWillUnmount() {  }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

//   These methods are called “lifecycle methods”.

// The componentDidMount() method runs after the component output has been rendered to the DOM. 
// This is a good place to set up a timer:

componentDidMount() {
    this.timerID = setInterval(      
        () => this.tick(),      
        1000    
    );  
}

// https://codepen.io/gaearon/pen/amqdNA?editors=0010

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {    
        this.setState({      
            date: new Date()    
        });  
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);