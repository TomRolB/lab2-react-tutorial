import './App.css'
import {Todo} from "./Todo.jsx";
import {TodoCreation} from "./TodoCreation.jsx";
import {useEffect, useState} from "react";

function App() {
    const [tasks, setTasks] = useState(()=>{
        const savedTasks = localStorage.getItem("tasks")
        if (!savedTasks) return []
        else return JSON.parse(savedTasks)
    })

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    return <div className="pt-20 pb-5 h-screen bg-cover bg-gray-900">
        <h1 className="font-semibold text-center text-white text-6xl font-sans">{"TODO list"}</h1>
        <TodoCreation tasks={tasks} setTasks={setTasks}/>
        <div className="rounded flex flex-col items-center justify-center">
                {tasks.map((task) => <Todo key={task.id} taskTitle={task.title} id={task.id} setTasks={setTasks}/>)}
        </div>

    </div>
}

export default App
