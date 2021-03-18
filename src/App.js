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
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} 
      onDelete={deleteTask}/>
    </div>
  );
}

export default App;
