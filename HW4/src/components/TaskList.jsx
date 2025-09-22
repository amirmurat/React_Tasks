import { memo, useRef, useState } from "react";
import { TaskItem } from "./TaskItem";

import "./TaskList.css";

export const TaskList = memo(({ list, addTask, toggleTask, deleteTask }) => {
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const onAdd = () => {
    const value = text.trim();
    if (!value) {
      alert("Fill the input");
      inputRef.current?.focus();
      return;
    }
    addTask(value);
    setText("");
    inputRef.current?.focus();
  };

  return (
    <>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={onAdd}>Add new item</button>

      <ul>
        {list.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </>
  );
});
