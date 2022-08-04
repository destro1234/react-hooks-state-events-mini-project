import React from "react";
import Task from "./Task"

function TaskList({tasks, onDelete}) {
  console.log(tasks)
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */
        tasks.map(task => 
          <Task key={task.text} task={task} text={task.text} category={task.category} onDelete={onDelete}/>
          )
        }
    </div>
  );
}

export default TaskList;
