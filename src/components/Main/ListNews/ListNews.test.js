import React from "react";
import { render, screen } from '@testing-library/react';
import ListNews from "./ListNews";

describe("ListNews", () => {
  test("matches snapshot", () => {
    render(<ListNews />);
    expect(screen).toMatchSnapshot();
  });
});
