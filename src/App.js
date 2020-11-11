import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import InLine from './components/InLine';
import './components/appStyle.css'
import style from './components/appStyle.module.css'






function App() {
  return (
    <div className="App">
      <h1 className ="error">Error</h1>
      <h1 className ={style.success}>Success</h1>

      {/*<Greet name ="reese" />
     <Greet name ="shaw" />
     <Greet name ="fusco" />
     <Welcome name ='Root' /> 
     <Welcome name ='carter' /> 
     <Welcome name ='flinch' /> 
  <Hello />
  <Message />
  <Counter />
  <FunctionClick />
  <ClassClick />
  <EventBind />
  <ParentComponent />
  <UserGreeting />
  <NameList />   
  <StyleSheet /> 
  <InLine />*/} 

    </div>
  );
}

export default App;
