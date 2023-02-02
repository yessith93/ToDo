 import React from "react";

 function ToDoCounter({total, completed}){
    return(
        <h2 className="TodoCounter">has completado {completed} de {total} </h2>
    );
 }
 export default  ToDoCounter;