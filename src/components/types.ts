// types.ts
export interface Todo {
  id: string;
  task: string;
  completedBy: string;
  isCompleted: boolean;
}

export interface TodoFormProps {
  onSubmit: (todo: Omit<Todo, 'id' | 'isCompleted'>) => void;
}

export interface TodoListProps {
  todos: Todo[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTask: string) => void; // Add onEdit function
}

export interface TodoItemProps {
  todo: Todo;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTask: string) => void; // Add onEdit function
}