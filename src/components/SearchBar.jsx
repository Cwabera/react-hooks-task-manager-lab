import { useTasks } from "../context/TaskContext";

function SearchBar() {
  const { setSearchTerm } = useTasks();

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;