import { useCallback, useState } from "react";
import { TaskList } from "./components/TaskList";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const addTask = useCallback((text) => {
    setList((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  }, []);

  const toggleTask = useCallback((id) => {
    setList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setList((prev) => prev.filter((task) => task.id !== id));
  }, []);

  return (
    <>
      <TaskList
        list={list}
        addTask={addTask}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
