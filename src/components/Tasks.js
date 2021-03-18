//don't forget, useState is immutable
import Task from './Task'

const Tasks = ({tasks, onDelete}) => { //Could also do props.tasks
    return (
        <>
            {tasks.map((task) => ( //Here's how to loop through
                <Task key={task.id} task={task} 
                onDelete={onDelete} />
             //Loop through and make a h3 header with the text for each
            ))}
        </>
    )
}

export default Tasks