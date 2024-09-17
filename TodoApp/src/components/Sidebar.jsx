import { useState } from "react";

const Sidebar = (props) => {
  const data = props.todoItem;
  const [name, setName] = useState(data.name);
  const [isImportant, setIsImportant] = useState(data.isImportant);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);

  const handleSave = () => {
    const newTodoItem = { ...data, name, isImportant, isCompleted };
    props.handleTotoItemChange(newTodoItem);
    props.setShowSidebar(false);
  };

  return (
    <div className="flex flex-col fixed top-0 bottom-0 right-0 w-[20vw] bg-white shadow-lg justify-between">
      <form className="p-4">
        <div className="pb-2">
          <label>Todo Name</label>
          <input
            name="name"
            value={name}
            onChange={(e) => {
              console.log({ value: e.target.value });
              setName(e.target.value);
            }}
            className="border-[1px] rounded-[5px] border-gray-400 px-2 py-1"
          ></input>
        </div>
        <div className="py-2">
          <label>Is important? &nbsp;</label>
          <input
            type="checkbox"
            name="isImportant"
            onChange={() => setIsImportant(!isImportant)}
            checked={isImportant}
          ></input>
        </div>
        <div className="py-2">
          <label>Is completed &nbsp;</label>
          <input
            type="checkbox"
            name="isCompleted"
            onChange={() => setIsCompleted(!isCompleted)}
            checked={isCompleted}
          ></input>
        </div>
      </form>
      <div className="p-4 border-t-2">
        <button
          className="px-2 py-1 mr-2 bg-white border-2 rounded-[5px]"
          onClick={() => props.setShowSidebar(false)}
        >
          Cancel
        </button>
        <button
          className="px-2 py-1 bg-white border-2 rounded-[5px] border-green-400 text-green-600"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
