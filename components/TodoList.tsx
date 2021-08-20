import Todo from "./Todo";

interface Props {
  todos: string[];
  handleDelete: (a: string) => string;
}

const TodoList = ({ todos, handleDelete }: Props) => {
  return (
    <div>
      <div>
        {todos.map((todo: string) => (
          <Todo key={todo} todo={todo} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
