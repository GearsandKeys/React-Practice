import { useState } from 'react'
//here's how to loop through

const Tasks = () => {
    const [tasks, setTasks] = useState( //default state below
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Feb 5th at 2:30pm',
                reminder: true,
            },
            {
                id: 2,
                text: 'Meeting at School',
                day: 'Feb 6th at 2:30pm',
                reminder: true,
            },
            {
                id: 3,
                text: 'Food Shopping',
                day: 'Feb 5th at 2:30pm',
                reminder: false,
            },
        ]
    )

    return (
        <>
            {tasks.map((task) => (
            <div key={task.id} style={{color: "red"}}>
                <h2>{task.day}</h2>
                <h3>{task.text}</h3>
                <br></br>
            </div>
             //loop through and make a h3 header with the text for each
            ))}
        </>
    )
}

export default Tasks