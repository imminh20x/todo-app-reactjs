const TodoItem = (props) => {
  return (
    <div className="flex justify-between w-full p-2 mb-2 text-xl border-0 rounded-sm cursor-pointer shadow-custom">
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
