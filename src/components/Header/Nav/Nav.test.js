import React from "react";
import { render, screen } from '@testing-library/react';
import Nav from "./Nav";
import { BrowserRouter } from 'react-router-dom';
import { userContext } from '../../../context/userContext';

describe("Nav", () => {
  test("matches snapshot", () => {

    let user = "";
    const login = (name) => setUser(name); 
    const logout = () => setUser("");

    const dataForTest = {
      user,
      login,
      logout
    }
    render(
      <BrowserRouter>
      <userContext.Provider value={dataForTest}>
        <Nav />
      </userContext.Provider>
      </BrowserRouter>);
    expect(screen).toMatchSnapshot();
  });
});
