 import React from "react";
import { TodoContext } from "../context";

 function ToDoCounter(){
    // se traen los datos del contexto
    const {completedTodos,totalTodos} = React.useContext(TodoContext)
    return(
        <h2 className="TodoCounter">has completado {completedTodos} de {totalTodos} </h2>
    );
 }
 export default  ToDoCounter;