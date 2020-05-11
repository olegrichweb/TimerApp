import React from 'react';
// import Input from './Components/InputHook';
import Timer from './Components/Timer/index';
import './App.css'

function App() {
  return (
    <div className="App">
      <Timer 
      time={60}
      step={1000}
      autostart={true}
      />
      <Timer
      time={120}
      step={2000}
      autostart={false}
      />
      <div className="developer"><h3>HW17 Oleh Omelchenko</h3></div>
    </div>
    
  );
}

export default App;
