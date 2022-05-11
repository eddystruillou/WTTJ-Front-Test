import React from 'react';
import { render, screen } from "@testing-library/react";
import SearchBar from './SearchBar';

  it("should render SearchBar", () => {
    render(<SearchBar value={"testValue"} handleChange={() => {}} />);
    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(1);
  });