import { useState, useEffect } from 'react'
import './Reminders.css';

const Reminders = () => {
    const [reminderData, setReminderData] = useState({data: [{"title": "Hello"}]});

    const fetchAllRemindersData = async () => {
        const remindersData = await fetch('http://127.0.0.1:3001/reminders')
        const jsonRemindersData = await remindersData.json();
        console.log(jsonRemindersData)
        return setReminderData(jsonRemindersData)
    }

    useEffect(() => {
        fetchAllRemindersData()
    }, []);

    return (
        <form className="reminderContainer">
        {reminderData.data.map(reminder => (
            <div className="reminderCard" id={reminder._id}>
                <input type="checkbox" name={reminder.title} value={reminder.title} defaultChecked={reminder.done} />
                <label for={reminder.title}>{reminder.title}</label>
            </div>
            ))}
        </form>
    )
}

export default Reminders