import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from "react-redux";
import  store  from "./redux/store";
import HooksCakeContainer from './components/HooksCakeContainer';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    // <Provider store ={store}>
    //   <div className="App">
    //     <HooksCakeContainer></HooksCakeContainer>
    //    <CakeContainer></CakeContainer> 
    // </div>
    // </Provider>
    <div className ="App">

    </div>
    
  );
}

export default App;
