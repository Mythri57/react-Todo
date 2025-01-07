
import { useState } from 'react';
import { TodoFormProps } from './types';

const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [task, setTask] = useState('');
  const [completedBy, setCompletedBy] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim() || !completedBy) return;
    
    onSubmit({
      task,
      completedBy
    });
    
    setTask('');
    setCompletedBy('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      <div className="space-y-2">
        <label className="block text-lg italic">Task Name:</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task name..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      
      <div className="space-y-2">
        <label className="block text-lg italic">Complete By:</label>
        <input
          type="date"
          value={completedBy}
          onChange={(e) => setCompletedBy(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
