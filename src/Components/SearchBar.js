// components/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ placeholder, onChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onChange(value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchTerm}
      onChange={handleSearch}
      style={{ padding: '8px', width: '100%' }}
    />
  );
}

export default SearchBar;
