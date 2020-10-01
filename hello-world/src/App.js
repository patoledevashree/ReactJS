import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Counter from './components/counter'
import FunctionClick from './components/functionClick';
import ClassClick from './components/ClassClick';
import BindEvent from './components/BindEvent';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
    {/* <Greet name="Devashree" heroName="AR"><p>This is a Children</p></Greet>
    <Greet name="Siddhu" heroName="HR"></Greet>
    <Welcome name="Devashree" heroName="AR"></Welcome>
    <Welcome name="Siddhu" heroName="HR"></Welcome> */}
    {/* <Message></Message> */}
    {/* <Counter></Counter> */}
    {/* <Greet name="Devashree" heroName="AR"></Greet>
    <Welcome name="Siddhu" heroName="HR"></Welcome> */}
    {/* <FunctionClick></FunctionClick> */}
    {/* <ClassClick></ClassClick> */}
    {/* <BindEvent></BindEvent> */}
    <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
