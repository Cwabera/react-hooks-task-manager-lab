import { useRef, useId } from "react";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const { addTask } = useTasks();
  const inputRef = useRef();
  const id = useId();

  function handleSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value.trim();
    if (!value) return;

    addTask(value);
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id}>New Task:</label>
      <input
        id={id}
        ref={inputRef}
        type="text"
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;