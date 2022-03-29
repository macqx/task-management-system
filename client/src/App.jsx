import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getAllTasks, searchTask } from "./api";
import { CreateTask } from "./CreateTask";
import { SearchTask } from "./SearchTask";
import { NavBar } from "./shared/NavBar";
import { TaskList } from "./TaskList";
import { useMutation } from "react-query";
import { createTask } from "./api";
import { UpdateTask } from "./UpdateTask/UpdateTask";

export default function App() {
  const [value, setValue] = useState("");
  const [updateItem, setUpdateItem] = useState({});
  const [toggleCreate, setToggleCreate] = useState(false);
  const [toggleUpdate, setToggleUpdate] = useState(false);

  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery("tasks", getAllTasks);

  const { mutateAsync, isLoading: createTaskLoading } = useMutation(
    createTask,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks");
      },
    }
  );

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data });
    setToggleCreate(false);
  };

  const handleUpdateTask = (id) => {
    setToggleUpdate(!toggleUpdate);
    const item = data?.filter((item) => item.id === id)[0];
    setUpdateItem(item);
  };

  return (
    <div className="flex flex-col items-center gap-2 max-w-lg mx-auto">
      <NavBar />
      <SearchTask
        value={value}
        setValue={setValue}
        toggleCreate={toggleCreate}
        setToggleCreate={setToggleCreate}
        tasks={data}
      />
      <TaskList
        data={data}
        isError={isError}
        isLoading={isLoading}
        toggleUpdate={toggleUpdate}
        setToggleUpdate={setToggleUpdate}
        handleUpdateTask={handleUpdateTask}
      />
      {toggleCreate && (
        <CreateTask
          onFormSubmit={onFormSubmit}
          toggleCreate={toggleCreate}
          setToggleCreate={setToggleCreate}
        />
      )}
      {toggleUpdate && updateItem && (
        <UpdateTask
          onFormSubmit={onFormSubmit}
          toggleUpdate={toggleUpdate}
          setToggleUpdate={setToggleUpdate}
          item={updateItem}
        />
      )}
    </div>
  );
}
