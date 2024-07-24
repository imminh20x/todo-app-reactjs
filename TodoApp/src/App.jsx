import { useState, useRef } from "react";
import TodoItem from "./components/TodoItem";
import { Sidebar } from "./components/Sidebar";

function App() {
  const inputRef = useRef();

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React", isImportant: true, isCompleted: false },
    { id: 2, title: "Learn Vue", isImportant: false, isCompleted: false },
    { id: 3, title: "Learn Angular", isImportant: false, isCompleted: false },
  ]);

  const [activeTodoItemId, setActiveTodoItemId] = useState();

  const [showSidebar, setShowSidebar] = useState(false);

  const activeTodoItem = todoList.find(
    (todoItem) => todoItem.id === activeTodoItemId
  );

  const handleCompleteCheckbox = (todoId) => {
    const updatedTodoList = todoList.map((todoItem) => {
      if (todoItem.id === todoId) {
        return { ...todoItem, isCompleted: !todoItem.isCompleted };
      }
      return todoItem;
    });
    setTodoList(updatedTodoList);
  };

  const handleTodoItemClick = (todoId) => {
    setShowSidebar(true);
    setActiveTodoItemId(todoId);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, title: event.target.value },
      ]);
      inputRef.current.value = "";
    }
  };

  const todoItem = todoList.map((todoItem) => {
    return (
      <TodoItem
        key={todoItem.id}
        title={todoItem.title}
        isImportant={todoItem.isImportant}
        isCompleted={todoItem.isCompleted}
        handleCompleteCheckbox={() => handleCompleteCheckbox(todoItem.id)}
        handleTodoItemClick={() => handleTodoItemClick(todoItem.id)}
      />
    );
  });

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
      <div>{todoItem}</div>
      {showSidebar && <Sidebar todoItem={activeTodoItem} />}
    </div>
  );
}

export default App;
