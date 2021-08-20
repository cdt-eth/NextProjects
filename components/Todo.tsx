import EditTodo from "./EditTodo";

interface Props {
  todo: string;
  handleDelete: (a: string) => string;
  handleEdit: (a: string) => string;
  editTodo: string;
  setEditTodo: any;
  handleEditTodo: any;
}

const Todo = ({
  todo,
  handleDelete,
  handleEdit,
  editTodo,
  setEditTodo,
  handleEditTodo,
}: Props) => {
  return (
    <li style={{ paddingBottom: 15 }}>
      {todo}{" "}
      <span
        style={{
          cursor: "pointer",
          border: "1px solid black",
          padding: 3,
          background: "grey",
          color: "white",
          marginLeft: 5,
          marginRight: 10,
        }}
        onClick={() => handleEdit(todo)}
      >
        Edit
      </span>
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
      {editTodo !== "" ? (
        <EditTodo
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          handleEditTodo={handleEditTodo}
        />
      ) : null}
    </li>
  );
};

export default Todo;
