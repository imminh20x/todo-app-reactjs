import PropTypes from "prop-types";
import { useMemo } from "react";

const FILTER_ITEMS = [
  {
    id: "all",
    label: "All",
    iconPath: "./public/inbox.png",
  },
  {
    id: "important",
    label: "Important",
    iconPath: "./public/flag.png",
  },
  {
    id: "completed",
    label: "Completed",
    iconPath: "./public/check.png",
  },
  {
    id: "deleted",
    label: "Deleted",
    iconPath: "./public/delete.png",
  },
];

const FilterPanel = ({ selectedFilterId, setSelectedFilterId, todoList }) => {
  const countByFilterType = useMemo(() => {
    return todoList.reduce(
      (acc, cur) => {
        let newAcc = { ...acc };

        if (cur.isImportant) {
          newAcc = { ...newAcc, important: newAcc.important + 1 };
        }
        if (cur.isCompleted) {
          newAcc = { ...newAcc, completed: newAcc.completed + 1 };
        }
        if (cur.isDeleted) {
          newAcc = { ...newAcc, deleted: newAcc.deleted + 1 };
        }

        return newAcc;
      },
      { all: todoList.length, important: 0, completed: 0, deleted: 0 }
    );
  }, [todoList]);

  return (
    <div className="flex-[0.3] bg-white">
      <input name="search-text" placeholder="Search" />
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {FILTER_ITEMS.map((filterItem) => {
          return (
            <div
              key={filterItem.id}
              className={`bg-[#e6e6e6] rounded flex justify-between p-1 ${
                filterItem.id === selectedFilterId
                  ? "bg-blue-900 text-white"
                  : ""
              }`}
              onClick={() => setSelectedFilterId(filterItem.id)}
            >
              <div>
                <img src={filterItem.iconPath} /> <p>{filterItem.label}</p>
              </div>
              <p>{countByFilterType[filterItem.id]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

FilterPanel.propTypes = {
  selectedFilterId: PropTypes.string,
  setSelectedFilterId: PropTypes.string,
  todoList: PropTypes.array,
};

export default FilterPanel;
