import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleDelete(text) {
    const newArray = tasks.filter((task) => task.text !== text )
    setTasks(newArray)
  }

  function addTask(newTask) {
    setTasks([...tasks, newTask])
  }

  
  
  function handleCategoryFilter(category) {
    setSelectedCategory(category)
  };

const newArray = tasks.filter((task) => {
  if (selectedCategory === "All") {
    return task
  }
  else {
    return task.category === selectedCategory
  }
})



  


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onCategoryFilter={handleCategoryFilter} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={addTask}/>
      <TaskList tasks={newArray} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
