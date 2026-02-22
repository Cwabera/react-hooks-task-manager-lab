import { useTasks } from "../context/TaskContext";

function TaskList() {
  const { tasks, toggleTask } = useTasks();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            onClick={() => toggleTask(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {task.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;