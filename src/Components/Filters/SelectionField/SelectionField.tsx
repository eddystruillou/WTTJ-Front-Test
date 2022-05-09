import React from 'react';
import { Select } from '@welcome-ui/select';
import { FilterState } from '../../../model';
import './SelectionField.css';

interface SelectionProps {
    state: FilterState;
    dispatch: React.Dispatch<{
        type: string;
        value: string | null;
      }>;
}

const SelectionField: React.FC<SelectionProps> = ({ state, dispatch }) => {
    return <div className="selectionField">
        <Select options={state.selectFields.map(
            filter => ({
              label: filter,
              value: filter
            }))} 
            name="welcome" value={state.selectedField}
            onChange={(value: string | any) =>
                dispatch({
                  type: "onUpdateFilter",
                  value
                })
              }
        />
    </div>
}

export default SelectionField;