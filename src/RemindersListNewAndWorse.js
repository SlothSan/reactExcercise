import React from 'react'
import Reminder from "./Reminder";
import './ReminderList.css'

class RemindersListNewAndWorse extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            reminders: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3001/reminders')
            .then(response => {
                return response.json()
            })
            .then(responseBody => {
                const remindersFromApi = responseBody.data
                this.setState({
                    reminders: remindersFromApi
                })
            })
    }


    render() {
        return (
            <div className={'remindersList'}>
                {this.state.reminders.map((reminder) => <Reminder className="reminderCard"
               id={reminder._id}
               title={reminder.title}
               done={reminder.done}
                />)}
            </div>
        )
    }

}

export default RemindersListNewAndWorse