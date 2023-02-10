import React from 'react';
// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import ReactDOM from 'react-dom';
import { TodoContext } from '../context';
import '../styles/modal.css'

function Modal({ children }) {
  const {setOpenModal} = React.useContext(TodoContext)
  
  // ReactDom tiene este método para crear portales
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
      <button onClick={()=>{setOpenModal(false)}}> Cancelar</button>
    </div>,
    document.getElementById('modal')  
  );
}

export { Modal };