// Prototypes

// learn to validate that our components get passed all the necessary properties.

import React from 'react';
import PropTypes from 'prop-types';

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

// you can use a range of validators on the data passed into your components.
// class MyComponent extends React.Component {
//   /* ... */
// }
// MyComponent.propTypes = {
//     name:   PropTypes.string.isRequired,
//     id:     PropTypes.number.isRequired,
//     width:  PropTypes.number.isRequired,
//     height: PropTypes.number.isRequired,
//     alt:    PropTypes.string
// };
// In development mode, when an invalid value is provided for a prop, a warning
// will be shown in your browser's JavaScript console.

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoList">
        {/* look here retard, also this is how you do comments */}
        <table style={{ border: '2px solid black;' }}>
          {' '}
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
            <Todo title="Learn React">15:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  render() {
    return (
      <tr>
        <td style={{ border: '1px solid black;' }}>{this.props.title}</td>
        <td style={{ border: '1px solid black;' }}>{this.props.children}</td>
      </tr>
    );
  }
}
Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

class TodoForm extends React.Component {
  render() {
    return <div className="todoForm">I am a TodoForm.</div>;
  }
}
