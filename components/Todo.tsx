interface Props {
  todo: string;
  handleDelete: (a: string) => string;
}

const Todo = ({ todo, handleDelete }: Props) => {
  return (
    <div>
      <li>
        {todo}{" "}
        <span
          style={{
            cursor: "pointer",
            border: "1px solid black",
            padding: 3,
            background: "red",
            color: "white",
          }}
          onClick={() => handleDelete(todo)}
        >
          X
        </span>
      </li>
    </div>
  );
};

export default Todo;
