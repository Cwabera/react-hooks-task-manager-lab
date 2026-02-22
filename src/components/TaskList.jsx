import { useTasks } from "../context/TaskContext";

function TaskList() {
  const { tasks, toggleTask } = useTasks();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.title}
          </span>

          <button
            data-testid={task.id}
            onClick={() => toggleTask(task.id)}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;