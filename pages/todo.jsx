import { useState } from "react";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleClick(e) {
    e.preventDefault();

    if (!input) {
      console.error("ERROR: Field can't be empty");
      return;
    }

    setTodos([...todos, input]);

    setInput("");
  }

  function handleDelete(todoID) {
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

      <div>
        {todos.map((todo) => (
          <div key={todo}>
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
        ))}
      </div>
      {/* <TodoList /> */}
    </div>
  );
};

export default Todo;
