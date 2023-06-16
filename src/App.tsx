import { useState } from "react";
import { NewTodoForm } from "./components/main-form";
import { TodoList } from "./components/todo-list";
import { Todo, Todos } from "./components/shared/types";

export default function App() {
  const [todos, setTodos] = useState<Todos>([]);

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), title, completed: false },
    ]);
  }

  function toggleTodo(id: number, completed: boolean) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
