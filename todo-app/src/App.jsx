import { useState } from "react";
import "./App.css";
import InputContainer from "./Components/InputContainer";
import TodoContainer from "./Components/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");

  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }

  console.log(todos);

  return (
    <main>
      <h1>Todo List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />

      <TodoContainer todos={todos} delTodo={delTodo} />
    </main>
  );
}

export default App;
