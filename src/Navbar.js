import './Header.css'
import FontContext from "./FontContext";
import {BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <FontContext.Consumer>
            { contextData => (
        <>
        <nav className={contextData.currentFont + " headerBar"}>
            <h1>Reminders</h1>
            <h6 className="italic">Your a lazy bastard!</h6>
            <Link to="/">Home</Link>
            <Link to="/createReminder">Create Reminder</Link>
            <button onClick={() => contextData.changeFont(contextData.currentFont)}>Change font</button>
        </nav>
        <Outlet />
        </>
        )}
        </FontContext.Consumer>
    )
}

export default Navbar