import React from "react";

function ToDoCategory({ todos, changeCategory }) {
  let categories = new Set(todos.map((category) => category.category));
  categories = Array.from(categories);
  return (
    <div className="categories">
      <label htmlFor="categories">Agrupar por Categorias: </label>
      <select name="categories" onChange={changeCategory}>
        <option value={""}>Todas</option>;
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default ToDoCategory;
