import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'



function App() {
  return (
      <div className="App">
     <Greet name ="reese" />
     <Greet name ="shaw" />
     <Greet name ="fusco" />
     <Welcome name ='Root' /> 
     <Welcome name ='carter' /> 
     <Welcome name ='flinch' /> 
     <Hello />
    </div>
  );
}

export default App;
