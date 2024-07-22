const TodoItem = (props) => {
  return (
    <div className="flex justify-between text-xl p-2 rounded-sm mb-2 w-full cursor-pointer border-0 shadow-custom">
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={props.handleCompleteCheckbox}
        />
        <p className="">{props.title}</p>
      </div>
      {props.isImportant && <p>🔥</p>}
    </div>
  );
};

export default TodoItem;
