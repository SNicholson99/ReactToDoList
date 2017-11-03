import React from 'react';

const List = (props) => (
  <ul>{props.todos.map((item, index) =>
      <li key={index}>{item.todo}<button onClick={()=> props.onComplete(index)}>{item.isComplete ? 'done...nice' : 'Cmon man do it'}</button></li>
    )}
  </ul>
);

export default List;
