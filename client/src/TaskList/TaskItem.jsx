import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import { useMutation, useQueryClient } from "react-query";
import { getTaskById, removeTask } from "../api";
import { Loader } from "../shared/Loader";

export const TaskItem = ({
  isLoading,
  isError,
  task,
  toggleUpdate,
  setToggleUpdate,
  handleUpdateTask,
}) => {
  const queryClient = useQueryClient();

  if (isLoading) <Loader />;
  if (isError) <Error />;

  const { id, taskname } = task;

  const createMutation = useMutation(removeTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const handleDeleteTask = (id) => {
    createMutation.mutate(id);
  };

  return (
    <div
      id="toast-default"
      className="flex items-center w-full p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <div className="ml-3 text-sm font-normal w-full">{taskname}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        onClick={() => handleUpdateTask(id)}
      >
        <span className="sr-only">Close</span>
        <PencilIcon />
      </button>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-default"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <TrashIcon onClick={() => handleDeleteTask(id)} />
      </button>
    </div>
  );
};
