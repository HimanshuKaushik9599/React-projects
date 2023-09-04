import React from 'react';

function Task({ task, onRemove }) {
  return (
    <li>
      {task}
      <button onClick={onRemove}>Remove</button>
    </li>
  );
}

export default Task;
