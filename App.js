
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode]=useState('light');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
<>
<Navbar title="Textutils" mode={mode} toggleMode ={toggleMode}aboutText="About Us"/>
<div className="container" my-2>
 <TextForm heading="Enter the text to analyze below" mode={mode}/>
 <About/>
</div>

</>
  );
}

export default App;
