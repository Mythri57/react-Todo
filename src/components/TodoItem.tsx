import { TodoItemProps } from './types';
import { useState } from 'react';

const TodoItem = ({ todo, onComplete, onDelete, onEdit }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.task);

  

  const handleEditSave = () => {
    if (editText.trim() && editText !== todo.task) {
      onEdit(todo.id, editText.trim()); // Call onEdit callback to update task text
    }
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
      <div>
        <h3 className={`text-lg ${todo.isCompleted ? 'line-through' : ''}`}>
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleEditSave}
              onKeyDown={(e) => e.key === 'Enter' && handleEditSave()}
              className="border p-1 rounded"
              autoFocus
            />
          ) : (
            todo.task
          )}
        </h3>
        <p className="text-sm text-gray-600">Complete by: {todo.completedBy}</p>
      </div>
      <div className="space-x-2">
        {!todo.isCompleted && (
          <button
            onClick={() => onComplete(todo.id)}
            className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Complete
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Delete
        </button>
        {!todo.isCompleted && !isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
