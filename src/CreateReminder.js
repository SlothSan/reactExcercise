import {useState} from 'react';
import './CreateReminder.css';

const CreateReminder = () => {

    const [title, setTitle] = useState('')
    const [done, setDone] = useState(true)

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleChangeDone = (event) => {
        console.log(event.target.value)
        if(event.target.value === true || event.target.value === "true") {
            setDone(true)
        } else {
            setDone(false)
        }
    }

    const handleCreateReminder = (event) => {
        event.preventDefault()
        const requestBody = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                done: done
            })
        }
        fetch('http://127.0.0.1:3001/reminders', requestBody)
    }

    return (
        <form onSubmit={handleCreateReminder}>
            <label htmlFor="title">Enter a reminder name</label>
            <input type="text" name="title" value={title} onChange={handleTitleChange}/>
            <label htmlFor="trueorfalse">is the reminder done or not?</label>
            <select name="trueorfalse" onChange={handleChangeDone}>
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>

            <input type="submit" value="Submit Reminder" />
        </form>
    )
}

export default CreateReminder