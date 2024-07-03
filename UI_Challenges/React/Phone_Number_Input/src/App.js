import React, { useState } from 'react';

export default function App() {
  const [formattedInput, setFormattedInput] = useState('');

  const formatInput = input => {
    const cleansedInput = input.replace(/[^0-9]/gi, '');
    let formatted = '';

    if (cleansedInput.length <= 3) {
      formatted = cleansedInput;
    } else if (cleansedInput.length <= 6) {
      formatted = `(${cleansedInput.slice(0, 3)}) ${cleansedInput.slice(3)}`;
    } else {
      formatted = `(${cleansedInput.slice(0, 3)}) ${cleansedInput.slice(
        3,
        6
      )} - ${cleansedInput.slice(6, 10)}`;
    }

    return formatted;
  };

  const handleInputChange = event => {
    const inputValue = event.target.value;
    const formatted = formatInput(inputValue);
    setFormattedInput(formatted);
  };

  return (
    <div>
      <label htmlFor="phone-input">Enter Phone Number</label>
      <input
        id="phone-input"
        value={formattedInput}
        onInput={handleInputChange}
      />
    </div>
  );
}
