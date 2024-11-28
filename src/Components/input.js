// components/Input.js
import React from 'react';

function Input({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ padding: '8px', width: '100%' }}
      />
    </div>
  );
}

export default Input;
