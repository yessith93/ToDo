const ToDoList = (props) => {
  let renderFunc = props.children || props.render;
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalTodos && props.onEmptyToDo()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      {props.searchedTodos.map(renderFunc)}
      <ul>{props.children}</ul>
    </section>
  );
};

export default ToDoList;
