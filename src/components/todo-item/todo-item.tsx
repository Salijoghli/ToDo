
type Props = {
  completed: boolean;
  id: number;
  title: string;
  toggleTodo: (id: number, completed: boolean) => void;
  deleteTodo: (id: number) => void;
};

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }:Props) {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
    )
  }
  