import React from "react";
import { render, screen } from '@testing-library/react';
import Header from "./Header";
import { BrowserRouter } from 'react-router-dom';
import { userContext } from '../../context/userContext';

describe("Header", () => {
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
          <Header />
        </userContext.Provider>
      </BrowserRouter>);
    expect(screen).toMatchSnapshot();
  });
});
