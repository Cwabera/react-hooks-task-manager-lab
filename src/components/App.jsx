import { TaskProvider } from "../context/TaskContext";
import SearchBar from "./SearchBar";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  return (
    <TaskProvider>
      <h1>Task Manager</h1>
      <SearchBar />
      <TaskForm />
      <TaskList />
    </TaskProvider>
  );
}

export default App;