import React, {useState} from "react";

function NewTaskForm(props) {

  const [text, setText] = useState(" ")
  const [category, setCategory] = useState("Code")

  

  function handleDetailsChange(event) {
    setText(event.target.value)
    }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    console.log(event.target)
    event.preventDefault()
    const newTask = {
      text: text,
      category: category
    }
  
    props.onTaskFormSubmit(newTask)
    setText("")
    setCategory("")
  
  
  
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleDetailsChange} type="text" name="text" value={text} />
      </label>
      <label>
        Category
        <select onChange={handleCategoryChange} value={category} name="category">
          {
          
          props.categories.map((category) => {
            if (category !== "All") {
              return <option key={category}>{category}</option>
            }
             
          })
          
          
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
