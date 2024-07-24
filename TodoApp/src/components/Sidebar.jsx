export const Sidebar = (props) => {
  const data = props.todoItem;
  return (
    <div className="flex flex-col fixed top-0 bottom-0 right-0 w-[20vw] bg-white shadow-lg justify-between">
      <form className="p-4">
        <div className="pb-2">
          <label>
            Todo Name
            <input
              name="name"
              value={data.title}
              className="border-[1px] rounded-[5px] border-gray-400 px-2 py-1"
            ></input>
          </label>
        </div>
        <div className="py-2">
          <label>
            Is important? &nbsp;
            <input type="checkbox" checked={data.isImportant}></input>
          </label>
        </div>
        <div className="py-2">
          <label>
            Is completed &nbsp;
            <input type="checkbox" checked={data.isCompleted}></input>
          </label>
        </div>
      </form>
      <div className="p-4 border-t-2">
        <button className="px-2 py-1 mr-2 bg-white border-2 rounded-[5px]">
          Cancel
        </button>
        <button className="px-2 py-1 bg-white border-2 rounded-[5px] border-green-400 text-green-600">
          Save
        </button>
      </div>
    </div>
  );
};
