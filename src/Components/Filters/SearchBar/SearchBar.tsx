import React from 'react';
import { InputText } from '@welcome-ui/input-text';
import './SearchBar.css';

interface Props {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ value, handleChange}) => {
  return <div className="searchBar">
    <InputText name="firstName" size="sm" placeholder="Your dream job?" value={value} onChange={handleChange} />
  </div>
}

export default SearchBar;