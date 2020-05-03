// // pass values from a parent component to a child component.
// A child component can have values handed to it either through
//  attributes, or through nested content.

// <ChildComponent some-attribute="this gets passed">So does this</ChildComponent>

// https://reactjs.org/docs/components-and-props.html

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
  render() {
    return (
      <div className="todoList">
        {/* look here!, also this is how you do comments */}
        <table style={{ border: '2px solid black;' }}>
          {' '}
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
}

// you can get the value of the title attribute
// set in TodoList
// (the parent component) by using {this.props.title}.
// Likewise, you can get the values Milk
// and 13:00 by using {this.props.children}.

// write some JSX that results in the HTML below.
class Todo extends React.Component {
  render() {
    return (
      <tr>
        <td style={{ border: '1px solid black;' }}>{this.props.title}</td>
        <td style={{ border: '1px solid black;' }}>{this.props.children}</td>
      </tr>
      // {this.props.title} //gets the value of the title attribute
      // {this.props.children} // get values of milk and 13:00
    );
  }
}

class TodoForm extends React.Component {
  render() {
    return <div className="todoForm">I am a TodoForm.</div>;
  }
}
