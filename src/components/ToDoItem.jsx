
const ToDoItem = (props) => {
    //logica 
    const tarea_completada = ()=>{
        const toDosActualizado=props.todos.map(todo => {
            if(todo.text===props.text){
                todo.completed=!todo.completed;
                if (todo.completed) {
                    console.log(`terminaste la tarea ${props.text}`)
                }else{
                    console.log(`aun no terminas la tarea ${props.text}`)
                }
                return todo
            }
            return todo
        })
        props.setTodos(toDosActualizado)
    }
    //una forma de eliminar 
    /*const findIndex = (text) => {
        return props.todos.findIndex(todo => todo.text === text)
      }
    const tarea_eliminada = ()=>{
        const newTodos = [...props.todos]
        newTodos.splice(findIndex(props.text), 1)
        props.setTodos(newTodos)
        console.log(`eliminaste la tarea ${props.text}`)
    }*/
    //otra forma de eliminar todos 
    const tarea_eliminada = () =>{
        const newTodos = props.todos.filter(todo=>todo.text !== props.text)
        props.setTodos(newTodos)
        console.log(`eliminaste la tarea ${props.text}`)
      }
    //vista 
    return ( <li className="TodoItem">
        <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={tarea_completada}
        >√</span>
        <p 
            className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
        >
            {props.text}
        </p>
        <span 
            className="Icon Icon-delete"
            onClick={tarea_eliminada}
        >x</span>
    </li>);
}
 
export default ToDoItem;