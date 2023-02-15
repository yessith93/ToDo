import React from "react";
import { TodoContext } from "../context";
import '../styles/toDoform.css';

function Todoform(props) {

    // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState('');
  // se sacan los valores necesarios del contexto 
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  // con esta funcion se captura el valor del text area 
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  
  // cierra el modal
  const onCancel = () => {
    setOpenModal(false);
  };
  
  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // preveiene el envio del formulario 
    event.preventDefault();
    // añade el nuevo todo
    addTodo(newTodoValue);
    // cierra el modal
    setOpenModal(false);
    // resete el textarea
    setNewTodoValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export default Todoform;
