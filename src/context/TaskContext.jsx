import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ FETCH INITIAL TASKS
  useEffect(() => {
    fetch("/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  // ✅ ADD TASK
  function addTask(title) {
    fetch("/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        completed: false
      })
    })
      .then(res => res.json())
      .then(newTask => {
        setTasks(prev => [...prev, newTask]);
      });
  }

  // ✅ TOGGLE TASK
  function toggleTask(id) {
    const task = tasks.find(t => t.id === id);

    fetch(`/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: !task.completed
      })
    })
      .then(res => res.json())
      .then(updatedTask => {
        setTasks(prev =>
          prev.map(t => (t.id === id ? updatedTask : t))
        );
      });
  }

  // ✅ FILTER
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks,
        addTask,
        toggleTask,
        setSearchTerm
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}