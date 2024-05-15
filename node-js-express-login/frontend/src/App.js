import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </Router>
  );
}

export default App;
