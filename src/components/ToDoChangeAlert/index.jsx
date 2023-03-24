import "./ChangeAlert.css";
import UseListenerStorage from "./UseListenerStorage";

function ToDoChangeAlert({ sincronize, setLoading }) {
  const { show, toggleShow } = UseListenerStorage(sincronize);
  if (show) {
    setLoading(true);
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            Parece que cambiaste tus TODOs en otra pestaña o ventana del
            navegador.
          </p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default ToDoChangeAlert;
