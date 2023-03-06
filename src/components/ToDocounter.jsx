import React from "react";

function ToDoCounter({ completedTodos, totalTodos, loading }) {
  // se traen los datos del contexto
  return (
    <h2 className={`TodoCounter ${!!loading && "loading"}`}>
      has completado {completedTodos} de {totalTodos}{" "}
    </h2>
  );
}
export default ToDoCounter;
