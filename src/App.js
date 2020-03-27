import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Films from "./components/Films/Films";
import Planets from "./components/Planets/Planets";
import "./App.css";

const App = () => (
  <React.Fragment>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/films/" component={Films} />
    <Route exact path="/planets/" component={Planets} />
    <div className="developed">Developed by Pashynov M.</div>
  </React.Fragment>
);

export default App;
