import React from "react";
import { render, screen } from '@testing-library/react';
import Main from "./Main";
import { BrowserRouter } from 'react-router-dom';


describe("Main", () => {
  test("matches snapshot", () => {
    siblingDataForm = (newIntroducedByForm) => this.setState({newIntroducedByForm })
    const newIntroducedByForm = {}
    render(
      <BrowserRouter>

      <Main newIntroducedByForm= {newIntroducedByForm} catchData={siblingDataForm}/>
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
