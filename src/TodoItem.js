import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  return (
    <div>
     <table style={{padding: '10px', margin: '10px' }}>
        <tbody>
        <tr>
            <td>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            </td>

            <td>
                <button onClick={() => onEdit(todo.id)}>Edit</button>
            </td>

            <td>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
            </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoItem;
