import {useState, useEffect} from 'react'
import Reminder from "./Reminder";
import './ReminderList.css'
import './Reminders.css'

const RemindersList = () => {
    const [reminders, setReminders] = useState([]) // empty array to start with

    useEffect(() => {
        fetch('http://localhost:3001/reminders')
            .then((response) => {
                return response.json()
            }).then((responseBody) => {
            const remindersFromApi = responseBody.data
            setReminders(remindersFromApi) // in turn re-renders the component
        })
    }, []) // runs on mount

    return (
        <div className={'remindersList'}>
            {reminders.map((reminder) => <Reminder className="reminderCard"
                id={reminder._id}
                title={reminder.title}
                done={reminder.done}
            />)}
        </div>
    )
}

export default RemindersList