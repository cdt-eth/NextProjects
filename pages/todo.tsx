import { useState } from "react";
import TodoList from "../components/Todo/TodoList";

const Todo = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<any[]>([]);
  const [editTodo, setEditTodo] = useState<string>("");

  function handleClick(e: any) {
    e.preventDefault();

    if (!input) {
      console.error("ERROR: Field can't be empty");
      return;
    }

    setTodos([...todos, input]);

    setInput("");
  }

  function handleDelete(currentTodo: string) {
    setTodos((todos) => todos.filter((todo) => todo !== currentTodo));
  }

  function handleEdit(currentTodo: string) {
    setEditTodo(currentTodo);
  }

  function handleEditTodo() {
    let editedTodos = todos.map((todo) => {
      todo = editTodo;
      return todo;
    });

    setTodos(editedTodos);
  }

  return (
    <div style={{ margin: 20 }}>
      <h1>Todo</h1>
      <form action="submit">
        <input
          type="text"
          placeholder="ex. do laundry"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ marginRight: 20 }}
        />

        <input type="submit" value="submit" onClick={handleClick} />
      </form>

      <br />

      <TodoList
        todos={todos}
        handleDelete={handleDelete as (a: string) => string}
        handleEdit={handleEdit as (a: string) => string}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        handleEditTodo={handleEditTodo as any}
      />
    </div>
  );
};

export default Todo;
