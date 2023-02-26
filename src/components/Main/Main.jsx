import React, { Component } from "react";
import Home from './Home';
import Form from './Form';
import ListNews from "./ListNews/ListNews";
import NotFound from '../NotFound';
import { Routes, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIntroducedByForm: {}
    }

  }
  siblingDataForm = (newIntroducedByForm) => this.setState({newIntroducedByForm })

  render() {
    return <main>
      <Routes>
        <Route path="/list" element={<ListNews  newIntroducedByForm={this.state.newIntroducedByForm}/>} />
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form catchData={this.siblingDataForm} />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>;
  }
}

export default Main;
