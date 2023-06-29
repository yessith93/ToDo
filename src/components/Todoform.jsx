import React from "react";
import "../styles/toDoform.css";

function Todoform({ addTodo, setOpenModal }) {
  // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [newTodoCategory, setNewTodoCategory] = React.useState("");

  const [requiredCategory, setrequiredCategory] = React.useState(false);
  let isready = false;
  // con esta funcion se captura el valor del text area
  const onChangeValue = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onChangeCategory = (event) => {
    setNewTodoCategory(event.target.value);
    setrequiredCategory(false);
  };
  // cierra el modal
  const onCancel = () => {
    setOpenModal(false);
  };
  const validations = (...texts) => {
    isready = !texts.some((text) => text === "");
  };

  const alertCategory = () => {
    newTodoCategory === "" && setrequiredCategory(true);
  };
  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // preveiene el envio del formulario
    event.preventDefault();
    // añade el nuevo todo
    validations(newTodoValue, newTodoCategory);
    alertCategory();
    if (isready) {
      addTodo(newTodoValue, newTodoCategory);
      // cierra el modal
      setOpenModal(false);
      // resete el textarea
      setNewTodoValue("");
    } else {
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>crea tu nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChangeValue}
        placeholder="escribe tu tarea"
        required
      />
      <div className="categoriaContainer">
        <label htmlFor="categoria">Categoria</label>
        <input
          type="text"
          name="categoria"
          value={newTodoCategory}
          onChange={onChangeCategory}
          placeholder={`${
            requiredCategory
              ? "es requerido para continuar"
              : "escribe tu categoria"
          }`}
          className={`${requiredCategory ? "required" : ""}`}
        />
      </div>
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
