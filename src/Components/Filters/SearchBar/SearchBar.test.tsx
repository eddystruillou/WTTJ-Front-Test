import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import SearchBar from './SearchBar';

test("should have only one inputText", () => {
  const handleChange = jest.fn();
  render(<SearchBar value={"testValue"} handleChange={handleChange} />);
  const input = screen.getAllByRole("textbox");
  
  expect(input.length).toBe(1);
});

test("should call handleChange after each new letter typed", () => {
  const handleChange = jest.fn();
  const value = 'testValue';
  const { getByPlaceholderText } = render(<SearchBar value={value} handleChange={handleChange} />);

  userEvent.type(getByPlaceholderText("Your dream job?"), value);

  expect(handleChange).toHaveBeenCalledTimes(9);
})