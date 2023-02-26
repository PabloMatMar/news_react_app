import React, { Component } from "react";
import Home from './Home';
import NotFound from '../NotFound'
import { Routes, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return <main>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/*" element={<NotFound/>} />
      </Routes>
    </main>;
  }
}

export default Main;
