import { TodoListProps } from './types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onComplete, onDelete, onEdit }: TodoListProps) => {
  const pendingTodos = todos.filter(todo => !todo.isCompleted);
  const completedTodos = todos.filter(todo => todo.isCompleted);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="bg-amber-100 rounded-lg p-4">
        <h2 className="text-xl font-semibold text-center italic mb-4">Upcoming Tasks</h2>
        {pendingTodos.length === 0 ? (
          <div className="text-center">
            <p className="text-lg">Good Job 👍</p>
            <p className="text-lg">All tasks are completed 👏</p>
          </div>
        ) : (
          <div className="space-y-2">
            {pendingTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onComplete={onComplete}
                onDelete={onDelete}
                onEdit={onEdit} // Pass onEdit function to TodoItem
              />
            ))}
          </div>
        )}
      </div>

      <div className="bg-green-100 rounded-lg p-4">
        <h2 className="text-xl font-semibold text-center italic mb-4">Completed Tasks</h2>
        {completedTodos.length === 0 ? (
          <p className="text-center text-lg">No records found !!</p>
        ) : (
          <div className="space-y-2">
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onComplete={onComplete}
                onDelete={onDelete}
                onEdit={onEdit} // Pass onEdit function to TodoItem
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;