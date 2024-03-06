import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <span style={{ margin: '0 5px'}}></span>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
