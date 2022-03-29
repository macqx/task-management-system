import { TaskItem } from "./TaskItem";

export const TaskList = ({
  data,
  isLoading,
  isError,
  toggleUpdate,
  setToggleUpdate,
  handleUpdateTask,
}) => {
  return (
    <div className="flex flex-col w-full gap-2">
      {data?.map((task) => (
        <TaskItem
          key={task?.id}
          task={task}
          isError={isError}
          isLoading={isLoading}
          toggleUpdate={toggleUpdate}
          setToggleUpdate={setToggleUpdate}
          handleUpdateTask={handleUpdateTask}
        />
      ))}
    </div>
  );
};
