import { useState, useEffect } from "react"
import './index.css'

function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")

    const addTask = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input])
            setInput("")
        }
    }

    useEffect(() => {
        if (tasks.length > 0 && tasks.length % 10 === 0) {
            alert("You have more than 10 jobs to do")
        }
    }, [tasks])

    return(
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList