import { TrashIcon } from "@heroicons/react/solid";

export default function TaskItem({ task: { taskname, id } }) {
  return (
    <li className="flex items-center gap-2">
      <span className="block">{taskname}</span>
      <TrashIcon
        onClick={() => console.log(id)}
        className="h-5 cursor-pointer"
      />
    </li>
  );
}
