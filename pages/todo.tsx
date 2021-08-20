import { useState } from "react";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  function handleClick(e: any) {
    e.preventDefault();

    if (!input) {
      console.error("ERROR: Field can't be empty");
      return;
    }

    setTodos([...todos, input]);

    setInput("");
  }

  function handleDelete(todoID: string) {
    console.log(todoID);
    setTodos((todos) => todos.filter((todo) => todo !== todoID));
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
      />
    </div>
  );
};

export default Todo;
