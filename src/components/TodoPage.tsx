

// TodoPage.tsx
import { useState } from 'react';
import { Todo } from './types';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Notification from './Notification';

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [notification, setNotification] = useState<string>('');
  const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false);

  const showNotification = (message: string) => {
    setNotification(message);
    setIsNotificationVisible(true);
  };

  const handleSubmit = (todoData: Omit<Todo, 'id' | 'isCompleted'>) => {
    const newTodo: Todo = {
      ...todoData,
      id: Date.now().toString(),
      isCompleted: false,
    };
    setTodos(prev => [...prev, newTodo]);
    showNotification('Task Added!');
  };

  const handleComplete = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
    showNotification('Task Completed!');
  };

  const handleDelete = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
    showNotification('Task Deleted!');
  };

  const handleEdit = (id: string, newTask: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
    showNotification('Task Edited!');
  };

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));
    showNotification("All completed tasks cleared!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white bg-red-600 py-4 rounded-lg mb-8">
          📝 TODO
        </h1>
        
        <TodoForm onSubmit={handleSubmit} />
        
        <div className="mt-8">
          <TodoList
            todos={todos}
            onComplete={handleComplete}
            onDelete={handleDelete}
            onEdit={handleEdit} // Pass the handleEdit function
          />
        </div>
        <button
  onClick={handleClearCompleted}
  className="w-full mt-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
>
  Clear All Completed Tasks
</button>



      </div>
      
      
      <Notification
        message={notification}
        isVisible={isNotificationVisible}
        onClose={() => setIsNotificationVisible(false)}
      />
    </div>
  );
};

export default TodoPage;
