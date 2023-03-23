const ToDoList = (props) => {
  let renderFunc = props.children || props.render;
  return (
    <section>
      <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}

        {!props.loading && !props.totalTodos && props.onEmptyToDo()}
        {!!props.totalTodos &&
          !props.searchedTodos.length &&
          props.onEmptySearchResults(props.searchText)}

        {!props.loading && !props.error && props.searchedTodos.map(renderFunc)}
      </ul>
    </section>
  );
};

export default ToDoList;
