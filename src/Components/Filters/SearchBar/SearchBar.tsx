import React from 'react';
import { InputText } from '@welcome-ui/input-text';

interface Props {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ value, handleChange }) => {
  return <InputText name="firstName" size="md" placeholder="Your dream job?" value={value} onChange={handleChange} />
}

export default SearchBar;