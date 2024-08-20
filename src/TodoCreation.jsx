import {useState} from "react";

export function TodoCreation({tasks, setTasks}) {
    const [taskTitle, setTaskTitle] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        setTasks((old) => [...old, {id: crypto.randomUUID(), title: taskTitle}])
        setTaskTitle("")
    }

    // function handleTaskChange(event) {
    //     setTask(event.target.value);
    // }

    function handleTextChange(event) {
        setTaskTitle(event.target.value)
    }

    return <form onSubmit={handleSubmit} className="mb-3 flex items-center flex-col ">
        <label className="text-white text-center font-sans">What do you have pending?</label><br/>
        <div>
            <input type="text" value={taskTitle} onChange={handleTextChange} className="rounded p-2"></input>
            <input type="submit" className="px-3 py-2 ml-2 bg-blue-600 rounded font-sans text-white" value="+ Add"/>
        </div>
    </form>
}