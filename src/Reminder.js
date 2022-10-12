import {useState} from "react";
import "./Reminders.css"
import FontContext from "./FontContext";

const Reminder = (props) => {

    const handleChange = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                done: !props.done // set it to the opposite of the current value.
            })
        }
        const requestUrl = 'http://localhost:3001/reminders/?id=' + props.id;
        fetch(requestUrl, requestOptions)
    }

    const handleClick = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({

            })
        }
        const requestUrl = 'http://localhost:3001/reminders/?id=' + props.id;
        fetch(requestUrl, requestOptions);
    }

    return (
        <FontContext.Consumer>
            { contextData => (
                <div className={contextData.currentFont + " reminderCard" }>

                    <input type="checkbox" onChange={handleChange} name={props.id} defaultChecked={props.done}/>
                    <label htmlFor={props.id}>{props.title}</label>
                    <a className="notAButton"  onClick={handleClick} href="/" target="">Delete this reminder!</a>
                </div>
            )}
        </FontContext.Consumer>
    )
}

export default Reminder