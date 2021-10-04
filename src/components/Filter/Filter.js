import React from 'react';

export default function Filter({ value, onHandleFilter }) {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onHandleFilter} />;
    </label>
  );
}
