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

const FilterPanel = ({ selectedFilterId, setSelectedFilterId }) => {
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
              <p>15</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterPanel;
