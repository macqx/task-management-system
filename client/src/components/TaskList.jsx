import { useQuery } from "react-query";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { isLoading, error, data } = useQuery("tasks", () =>
    fetch("http://127.0.0.1:8000/api/tasks").then((res) => res.json())
  );

  return (
    <ul>
      {data?.map((task) => (
        <TaskItem className="cursor-pointer" key={task.id} task={task} />
      ))}
    </ul>
  );
}
