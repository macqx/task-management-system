import { useState, useContext } from "react";
import { useMutation } from "react-query";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [task, setTask] = useState("");

  const onSubmit = (e, taskname) => {
    e.preventDefault();
  };

  return (
    <>
      <TaskList />
      <TaskForm onSubmit={onSubmit} task={task} setTask={setTask} />
    </>
  );
}
