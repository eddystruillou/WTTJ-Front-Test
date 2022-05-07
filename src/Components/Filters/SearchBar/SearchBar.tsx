import React from 'react';
import { InputText } from '@welcome-ui/input-text';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const [value, setValue] = React.useState('')

  const handleChange = (event:any) => {
    setValue(event.target.value)
  }

  return <div className="searchBar">
    <InputText name="firstName" size="sm" placeholder="Your dream job?" value={value} onChange={handleChange} />
  </div>
}

export default SearchBar;