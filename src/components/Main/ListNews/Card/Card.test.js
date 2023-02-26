import React from "react";
import { render, screen } from '@testing-library/react';
import Card from "./Card";

describe("Card", () => {

  const newForTest = {
    title: "Un alumno testea su aplicacion",
    abstract: "Lo hace para que su aplicacion no solo haga lo que tiene que hacer si no que no haga lo que no tiene que hacer",
    multimedia: ["", "", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HFdvAKhPZVL61WSCAjNztzasVWmW3uxPrj8leDoBoA&s"],
    url: "https://ahorasomos.izertis.com/globetesting/2018/08/roi-del-testing/",
    published_date: "2023-02-22T16:11:06-05:00"
  }
  test("matches snapshot", () => {
    render(<Card data={newForTest}/>);
    expect(screen).toMatchSnapshot();
  });
});
