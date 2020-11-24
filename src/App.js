import React ,{Component} from 'react';
import './App.css';
/*import CLickCounter from './components/CLickCounter';
import HoverCounter from './components/HoverCounter';
import ErrorBoundary from './components/ErrorBoundary';
import PortalDemo from './components/PortalDemo';
import FocusInput from './components/FocusInput';
import Refsdemo from './components/Refsdemo';
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
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Fragment from './components/Fragment'; 
import Table from './components/Table'; 
import ParentComp from './components/ParentComp'
import FRparentinput from './components/FRparentinput'
import Hero from './components/Hero'
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';*/
import User from './components/User';










class App extends Component {
  
  render(){
  return (
    <div className="App">
      <User name ={ (isLoggedIn) =>  isLoggedIn ?"Neal caffery" :"ghenchana"} />
      {/* <h1 className ="error">Error</h1>
     <h1 className ={style.success}>Success</h1>
     <Greet name ="reese" />
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
     <InLine />
     <Form />
     <LifecycleA />
     <Fragment />
     <Table />
     <ParentComp />
     <Refsdemo />
     <FocusInput />
     <FRparentinput />
     <PortalDemo />
      <ErrorBoundary>
        <Hero heroName="joker" />

        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Neal" />
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Reese" />
      </ErrorBoundary>
    <CLickCounter name ="Reese"/>
    <HoverCounter name ="Neal"/>
          <ClickCounter2 />
          <HoverCounter2 />*/}

    </div>
  );
        }
}

export default App;
