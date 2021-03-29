import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? //if task.reminder is true add reminder to the class
        "reminder" : ""}`} //else, add nothing.
        onDoubleClick={() => onToggle(task.id)}> 
            <h3>{task.text} <FaTimes style={{ color:'red', cursor:'pointer' }}
            onClick={() => onDelete(task.id)}
            />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
