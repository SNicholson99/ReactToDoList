import React from 'react';

const List = (props) => (
  <ul>{props.todos.map((item, index) =>
      <li key={index}>{item}<button onClick={props.onClick}>{props.isComplete}</button></li>
    )}
  </ul>
)

export default List;
