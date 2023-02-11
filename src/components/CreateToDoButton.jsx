import React from "react";
import { TodoContext } from "../context";

const CreateToDoButton = () => {
    //se obtiene la funcion del contexto
    const {setOpenModal} = React.useContext(TodoContext)
    const onClickButton = () => {
        setOpenModal(true); 
      };
    return ( 
        <button className="CreateTodoButton" onClick={onClickButton}>+</button>
     );
}
 
export default CreateToDoButton;