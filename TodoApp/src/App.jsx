import { useState, useRef } from "react";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";

function App() {
  const inputRef = useRef();

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Learn React",
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 2,
      name: "Learn Vue",
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 3,
      name: "Learn Angular",
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
    },
  ]);

  const [activeTodoItemId, setActiveTodoItemId] = useState();

  const [showSidebar, setShowSidebar] = useState(false);

  const [selectedFilterId, setSelectedFilterId] = useState("all");

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

  const handleTotoItemChange = (newTodoItem) => {
    const newTodoList = todoList.map((todoItem) => {
      if (todoItem.id === newTodoItem.id) {
        return newTodoItem;
      }
      return todoItem;
    });
    setTodoList(newTodoList);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, name: event.target.value },
      ]);
      inputRef.current.value = "";
    }
  };

  const filteredTodos = todoList
    .filter((todoItem) => {
      switch (selectedFilterId) {
        case "all":
          return true;
        case "important":
          return todoItem.isImportant;
        case "completed":
          return todoItem.isCompleted;
        case "deleted":
          return todoItem.isDeleted;
        default:
          return true;
      }
    })
    .map((todoItem) => {
      return (
        <TodoItem
          key={todoItem.id}
          name={todoItem.name}
          isImportant={todoItem.isImportant}
          isCompleted={todoItem.isCompleted}
          handleCompleteCheckbox={() => handleCompleteCheckbox(todoItem.id)}
          handleTodoItemClick={() => handleTodoItemClick(todoItem.id)}
        />
      );
    });

  return (
    <div className="flex">
      <FilterPanel
        selectedFilterId={selectedFilterId}
        setSelectedFilterId={setSelectedFilterId}
        todoList={todoList}
      ></FilterPanel>
      <div className="flex-[0.7] bg-white p-7">
        <input
          ref={inputRef}
          type="text"
          name="add-new-task"
          placeholder="Add new task here"
          className="w-full p-1 text-xl border-0 rounded-sm mb-2 shadow-[0,0,2px,2px,rgba(0,0,0,0.1)]"
          onKeyDown={handleKeyDown}
        />

        <div>{filteredTodos}</div>

        {showSidebar && (
          <Sidebar
            key={activeTodoItemId}
            todoItem={activeTodoItem}
            handleTotoItemChange={handleTotoItemChange}
            setShowSidebar={setShowSidebar}
          />
        )}
      </div>
    </div>
  );
}

export default App;
