import { useState } from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Alerts from './componentes/Alerts';
import TextForm from './componentes/TextForm';
// import About from './componentes/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [colorT, setColorT] = useState('dark');
  const [alertState, setAlertState] = useState(null);

  const showAlert = (message, type) => {
    setAlertState({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlertState(null);
    }, 1600);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      setColorT('light');
      document.body.style.backgroundColor = '#353a40';
      showAlert("Dark mode is enabled!", "success");
    }
    else {
      setmode('light')
      setColorT('dark')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled!", "success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} colorT={colorT} toggleMode={toggleMode} />
      <Alerts Alerts={alertState} />
      {/* <Router> */}
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path='/' element={} />
            <Route exact path='/about' element={} />
          </Routes> */}
          <TextForm heading="Type the text to analyze below" showAlert={showAlert} mode={mode} />
          {/* <About /> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
