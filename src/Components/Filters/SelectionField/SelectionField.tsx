import React from 'react';
import { OptionValue, Select } from '@welcome-ui/select';
import { FilterState } from '../../../model';

interface SelectionProps {
    state: FilterState;
    dispatch: React.Dispatch<{
        type: string;
        value: (OptionValue | OptionValue[]);
      }>;
}

const SelectionField: React.FC<SelectionProps> = ({ state, dispatch }) => {
    return <Select
      size="md"
      options={state.selectFields.map(
      filter => ({
        label: filter,
        value: filter
      }))} 
      name="welcome" 
      value={state.selectedField}
      onChange={(value: (OptionValue | OptionValue[])) =>
          dispatch({
            type: "onUpdateFilter",
            value
          })
        }
    />
}

export default SelectionField;