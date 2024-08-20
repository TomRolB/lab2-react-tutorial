import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export function Todo({taskTitle, id, setTasks}) {
    const [completed, setCompleted] = useState(false)

    function handleCheckboxChange() {
        setCompleted(previous => !previous)
    }

    function getClassNameDynamically() {
        return completed
            ? "flex left-0 ml-2 mt-2 p-3 rounded w-2/4 bg-gradient-to-r from-green-600 to-green-400"
            : "flex left-0 ml-2 mt-2 p-3 rounded w-2/4 bg-gradient-to-r from-pink-600 to-pink-400";
    }

    function handleDelete() {
        setTasks(currentTasks => currentTasks.filter(task => task.id !== id))
    }

    return (
        <div className={getClassNameDynamically()} style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" onChange={handleCheckboxChange} className="mr-2 border-0" />
            <h1 className="text-white text-xl" style={{ flexGrow: 1 }}>{taskTitle}</h1>
            <button onClick={handleDelete} className="ml-4">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );

}