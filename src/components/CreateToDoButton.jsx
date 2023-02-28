import React from "react";

const CreateToDoButton = ({setOpenModal}) => {
    const onClickButton = () => {
        setOpenModal(true); 
      };
    return ( 
        <button className="CreateTodoButton" onClick={onClickButton}>+</button>
     );
}
 
export default CreateToDoButton;