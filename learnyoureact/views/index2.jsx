// Implement the missing code above using JSX notation
// to output the HTML below.
// Note: you don't have to change server-side code (program.js).
// Don't forget render and return! :-)

import React from 'react';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
  // Write code here
  render() {
    return <div className="todoList">I am a TodoList.</div>;
  }
}

class TodoForm extends React.Component {
  // Write code here
  render() {
    return <div className="todoForm">I am a TodoForm.</div>;
  }
}

// official solution

// import React from 'react';

// export default class TodoBox extends React.Component {
//   render() {
//     return (
//       <div className="todoBox">
//         <h1>Todos</h1>
//         <TodoList />
//         <TodoForm />
//       </div>
//     );
//   }
// }

// class TodoList extends React.Component {
//   render() {
//     return <div className="todoList">I am a TodoList.</div>;
//   }
// }

// class TodoForm extends React.Component {
//   render() {
//     return <div className="todoForm">I am a TodoForm.</div>;
//   }
// }

// Hello React
// import React from "react";

// export default class TodoBox extends React.Component {
//   render() {
//     return <div className="todoBox">Hello, world!</div>;
//   }
// }
