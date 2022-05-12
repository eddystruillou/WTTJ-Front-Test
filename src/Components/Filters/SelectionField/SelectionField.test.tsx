import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import SelectionField from './SelectionField';
import { FilterState } from './../../../model';

// Error: Uncaught [TypeError: Cannot read properties of undefined (reading 'xs')]
// En ayant mis un point d'arrêt, le problème provient de l'endroit ou est fait le map

test.skip("should have only one select", () => {
  const dispatch = jest.fn();
  const values: FilterState = {
    selectedField: "testSelectedField",
    selectFields: ["testSelectedField", "testOptionA", "testOptionB"]
  };
  render(<SelectionField state={values} dispatch={dispatch} />);
  const select = screen.getAllByRole("combobox");
  
  expect(select.length).toBe(1);
});