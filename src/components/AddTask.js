import { useState } from 'react'

const AddTask = () => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
    
  return (
        <form className='add-form'>
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
                value = {reminder} //value is equal to the text
                onChange = {(e) => setReminder(e.currentTarget.checked)} //change value to checked value
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
        
        
    )
}

export default AddTask
