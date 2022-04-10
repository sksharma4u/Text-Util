import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { useState } from 'react';
import{ 
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom'

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }


  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Enabled", "success");
      document.title = "Text Utils - Dark Mode";
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode is Disabled", "success");
      document.title = "Text Utils - Light Mode";
    }
  }

  return (
    <>      
      <Router>
        <Navbar title="Text Utils" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/about" element = {<About mode={mode}/>} />      
          <Route exact path="/" element = {<TextForm heading="Enter Text Here To Analyze..." mode={mode} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
