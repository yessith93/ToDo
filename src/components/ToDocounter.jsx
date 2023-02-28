 import React from "react";

 function ToDoCounter({completedTodos,totalTodos}){
    // se traen los datos del contexto
    return(
        <h2 className="TodoCounter">has completado {completedTodos} de {totalTodos} </h2>
    );
 }
 export default  ToDoCounter;