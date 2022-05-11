import React from 'react';
import { render, screen } from "@testing-library/react";
import SelectionField from './SelectionField';

  it("should render SelectionField", () => {
    render(<SelectionField state={{selectedField:"test1", selectFields:["test1", "test2", "test3"]}} dispatch={() => {}} />);
    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(1);
  });