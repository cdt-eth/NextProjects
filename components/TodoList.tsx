import Todo from "./Todo";

interface Props {
  todos: string[];
  handleDelete: (a: string) => string;
  handleEdit: (a: string) => string;
  editTodo: string;
  setEditTodo: any;
  handleEditTodo?: any;
}

const TodoList = ({
  todos,
  handleDelete,
  handleEdit,
  editTodo,
  setEditTodo,
  handleEditTodo,
}: Props) => {
  return (
    <div>
      {todos.map((todo: string) => (
        <Todo
          //   key={Math.floor(Math.random() * 10000)}
          key={todo}
          todo={todo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
