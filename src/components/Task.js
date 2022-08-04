import React from "react";

function Task(props) {
  console.log(props.category)
  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button onClick={() => props.onDelete(props.task.text)} className="delete">X</button>
    </div>
  );
}

export default Task;
