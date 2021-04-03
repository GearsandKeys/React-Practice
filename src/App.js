import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  //here we cab declare variables and write javascript
  //const x = true;
  //const name = "Nathan"
  const [showAddTask, setShowAddTask] = useState(false) //allows us to set showing the AddTask bool to true or false
  const [tasks, setTasks] = useState([])

 useEffect(() => {
   const getTasks = async() => {
    const tasksFromServer = await fetchTasks() //calls fetchTasks below and waits
    setTasks(tasksFromServer) //then plugs that data into the setTasks function
   }

   getTasks() //calls the above function
 }, []) //this bracket is for the dependencies 

//Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks') //fetches the db from the localhost
  const data = await res.json() //converts it to json

  return data //returns it so it can be plugged in
}

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task } //...task copies the original information
  setTasks([...tasks, newTask]) //copies old tasks, then adds the new one.
}

//Delete Task
 const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { //watch out for forgetting the semicolon
      method: 'DELETE',
    })

  //console.log('delete', id) //great way to test
  setTasks(tasks.filter((task) => task.id !== id))
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
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd = { showAddTask }/>

      { showAddTask && <AddTask onAdd={ addTask }/>} 
      {/*special ternary that doesn't use else, if showAddTask is true then show the AddTask component */}
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
