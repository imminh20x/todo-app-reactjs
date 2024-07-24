const TodoItem = (props) => {
  return (
    <div
      onClick={props.handleTodoItemClick}
      className="flex justify-between w-full p-2 mb-2 text-xl border-0 rounded-sm cursor-pointer shadow-custom"
    >
      <div className="flex gap-2">
        <input
          checked={props.isCompleted}
          type="checkbox"
          onChange={props.handleCompleteCheckbox}
        />
        <p>{props.title}</p>
      </div>
      {props.isImportant && <p>🔥</p>}
    </div>
  );
};
export default TodoItem;
