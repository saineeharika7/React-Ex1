import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';




function App() {
  return (
      <div className="App">
     {/*<Greet name ="reese" />
     <Greet name ="shaw" />
     <Greet name ="fusco" />
     <Welcome name ='Root' /> 
     <Welcome name ='carter' /> 
     <Welcome name ='flinch' /> 
  <Hello />
  <Message />
  <Counter />
  <FunctionClick />*/}
  <ClassClick />
  
    </div>
  );
}

export default App;