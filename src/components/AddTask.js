import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('') //default is ''
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false) //default is false
    
const onSubmit = (e) => {
    e.preventDefault() //prevents page from refreshing or submitting data to another page

    if(!text) { //validation, checks that there is something in text
        alert("Please add task!")
        return
    }

    onAdd( {text, day, reminder}) //passes in object values for task

    //clear the data on the form
    setText('')
    setDay('')
    setReminder(false) //resets reminder to false
}

  return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'
                value = {text} //value is equal to the text
                onChange = {(e) => setText(e.target.value)} //change the text value whenever something is typed in to the current typed in text
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Date & Time'
                value = {day} //value is equal to the day
                onChange = {(e) => setDay(e.target.value)} //change the text value whenever something is typed in to the current typed in text
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' 
                checked = {reminder} //makes checked value equal to true
                value = {reminder} //value is equal to the text
                onChange = {(e) => setReminder(e.currentTarget.checked)} //change value to checked value
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
        
        
    )
}

export default AddTask
