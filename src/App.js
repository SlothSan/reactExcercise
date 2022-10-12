import Navbar from "./Navbar";
import RemindersList from "./RemindersList";
import CreateReminder from "./CreateReminder"
import FontContext from "./FontContext";
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from "react";
import RemindersListNewAndWorse from "./RemindersListNewAndWorse";


function App() {
    const [currentFont, setFont] = useState('main-font')
    const changeFont = (currentFont) => {
        if(currentFont === 'main-font') {
            setFont('another-font')
        } else {
            setFont('main-font')
        }
    }
  return (
      <FontContext.Provider value={
          {
              currentFont: currentFont,
              setFont: setFont,
              changeFont: changeFont
          }
      }>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<RemindersListNewAndWorse />} />
                <Route path="/createReminder" element={<CreateReminder />} />
              </Route>
          </Routes>
      </BrowserRouter>
      </FontContext.Provider>
  );
}

export default App;
