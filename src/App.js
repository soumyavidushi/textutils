import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import { Alert } from './components/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

let name = "Soumya";
function App() {
  const [mode, setDarkMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  }

  const switchColor = () => {
    setDarkMode('dark');
    debugger;
    // document.body.style.backgroundColor = e.target.value;
  }

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}></TextForm>}>
        </Route>
        <Route path="/about" element={<About mode={mode}></About>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
