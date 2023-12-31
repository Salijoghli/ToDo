import { TodoItem } from "../todo-item"
import { Todos, Todo } from "../shared/types";


type Props = {
  todos: Todos;
  toggleTodo: (id: number, completed: boolean) => void;
  deleteTodo: (id: number) => void;
};

export function TodoList({ todos, toggleTodo, deleteTodo }:Props) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
