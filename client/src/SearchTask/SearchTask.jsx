import { PlusIcon, SearchIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { searchTask } from "../api";

export const SearchTask = ({
  value,
  setValue,
  toggleCreate,
  setToggleCreate,
}) => {
  const queryClient = useQueryClient();

  useEffect(async () => {
    if (value) {
      queryClient.setQueryData("tasks", await searchTask(value));
      return;
    }
  }, [value]);

  return (
    <div className="flex items-center justify-between gap-2 w-full">
      <div className="mb-6 w-full">
        <label
          htmlFor="taskname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Search Task
        </label>
        <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <input
            type="text"
            id="taskname"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type any task..."
            className="w-full outline-none bg-transparent"
          />
          <button onClick={() => handleSearch(value)}>
            <SearchIcon className="h-5 cursor-pointer" />
          </button>
        </div>
      </div>
      <button
        onClick={() => setToggleCreate(!toggleCreate)}
        type="submit"
        className="whitespace-nowrap text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <PlusIcon className="h-5" />
      </button>
    </div>
  );
};
