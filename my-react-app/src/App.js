import './App.css';
import Navbar from './components/Navbar';
import ForumForm from './components/ForumForm';
import About from './components/About';
import CustomAlert from './components/CustomAlert';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

 const showAlert = (message, type)=>{
   setAlert({    
     msg: message,
     type: type
   })
   setTimeout(() => {
     setAlert(null);
   }, 2000);
 }

  const toggleMode = ()=>{
   if (mode === 'light') {
     setMode('dark');
     document.body.style.backgroundColor = "#44445c";
     showAlert('Darkmode enabled successfully', 'success');
     document.title = "Dark mode Enabled";
   }
   else { 
     setMode('light');
     document.body.style.backgroundColor = "white";
     showAlert('Lightmode enabled successfully', 'success');
     document.title = "Light mode Enabled";
   }
  }

  return (
    <>
       <Navbar title="StyleSavy" aboutText="About Us" mode={mode} 
        toggleMode={toggleMode} />
        <CustomAlert alert={alert}/>
        {/* <About /> */}
        {/* <div className="container">
          <ForumForm sectionHeading="Here From Us" mode={mode} />
        </div> */}
        <Routes>
          <Route exact path="/" element={<ForumForm mode={mode}/>} />
          {/* <Route exact path="/home" element={<ForumForm mode={mode}/>} /> */}
          <Route exact path="/about" element={<About/>} />
        </Routes>
    </>
  );
}

const AppWrapper  = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
