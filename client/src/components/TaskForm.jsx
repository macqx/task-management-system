import axios from "axios";

export default function TaskForm({ onSubmit, task, setTask }) {

  const mutation = useMutation(newTodo => {
    return axios.post('/todos', newTodo)
  })

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <input
        required
        type="text"
        value={task}
        className="border"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="px-3 py-2 bg-blue-400">Add Task</button>
    </form>
  );
}
