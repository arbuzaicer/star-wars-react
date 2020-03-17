import React from 'react';
import './App.css';
import DAL from './services/DAL'
import {Route} from 'react-router-dom'
import Films from './components/Films/Films'
import Planets from './components/Planets/Planets'
import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home/Home";

function App() {
    return (
        <>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/films/" component={Films}/>
            <Route exact path="/planets/" component={Planets}/>
        </>
    );
}

export default App;
