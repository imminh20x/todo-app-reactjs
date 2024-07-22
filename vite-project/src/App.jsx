import { useRef, useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React", isImportant: true, isCompleted: false },
    { id: 2, title: "Learn Vue", isImportant: false, isCompleted: false },
    { id: 3, title: "Learn Angular", isImportant: false, isCompleted: false },
  ]);

  // const todoList = [
  //   { id: 1, title: "Learn React" },
  //   { id: 2, title: "Learn Vue" },
  //   { id: 3, title: "Learn Angular" },
  // ];

  const inputRef = useRef();

  const handleCompleteCheckbox = (id) => {
    const updatedTodoList = todoList.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, isCompleted: !todoItem.isCompleted };
      }
      return todoItem;
    });
    setTodoList(updatedTodoList);
  };

  const todoItem = todoList.map((todoItem) => {
    return (
      <TodoItem
        key={todoItem.id}
        title={todoItem.title}
        isImportant={todoItem.isImportant}
        isCompleted={todoItem.isCompleted}
        handleCompleteCheckbox={() => handleCompleteCheckbox(todoItem.id)}
      />
    );
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, title: event.target.value },
      ]);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="bg-white p-7">
      <input
        ref={inputRef}
        type="text"
        name="add-new-task"
        placeholder="Add new task here"
        className="w-full p-1 text-xl border-0 rounded-sm mb-2 shadow-[0,0,2px,2px,rgba(0,0,0,0.1)]"
        onKeyDown={handleKeyDown}
      />
      {todoItem}
    </div>
  );
}

export default App;
