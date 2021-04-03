//don't forget, useState is immutable
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => { //Could also do props.tasks
    return (
        <>
            {tasks.map((task, index) => ( //Here's how to loop through
                <Task key={index} task={task} //he had an issue with the id, but none here
                onDelete={onDelete} 
                onToggle={onToggle}/>
             //Loop through and make a h3 header with the text for each
            ))}
        </>
    )
}

export default Tasks