import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
  //here we cab declare variables and write javascript
  //const x = true;
  //const name = "Nathan"
  const [tasks, setTasks] = useState([ //tasks = default state below
    //app level state
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
])

//Delete Task
const deleteTask = (id) => {
  //console.log('delete', id) //great way to test
  setTasks(tasks.filter((tasks) => tasks.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => //map the tasks state
    task.id === id ? { ...task, reminder:
    !task.reminder } : task
    )
  )
}

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}/>
      ) : (
        <h3 style={{textAlign : 'center'}}>No Tasks to Show!</h3>
      )}
    </div>
  );
}

export default App;
