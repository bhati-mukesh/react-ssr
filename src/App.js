import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about" style={{ paddingLeft: "20px" }}>
          About
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
}

export default App;
