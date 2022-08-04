import React from "react";

function CategoryFilter(props) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
        props.categories.map((category) => {
         return  <button onClick={() => props.onCategoryFilter(category)} key={category}  className={props.selectedCategory === category ? "selected" : " "}>{category}</button>
        })
      }

    </div>
  );
}

export default CategoryFilter;
