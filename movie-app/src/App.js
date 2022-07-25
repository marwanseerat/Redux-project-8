import React from "react";
import Admin from "./Admin";
import LoginA from "./LoginA";
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginA />}/>
      <Route path="/Admin" element={<Admin/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
