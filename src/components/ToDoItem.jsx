
const ToDoItem = (props) => {
    //logica 
    const tarea_completada = ()=>{
        console.log(`completaste la tarea ${props.text}`)
    }
    const tarea_eliminada = ()=>{
        console.log(`eliminaste la tarea ${props.text}`)
    }
    //vista 
    return ( <li className="TodoItem">
        <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={tarea_completada}
        >√</span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <span 
            className="Icon Icon-delete"
            onClick={tarea_eliminada}
        >x</span>
    </li>);
}
 
export default ToDoItem;