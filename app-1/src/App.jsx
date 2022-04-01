import "./App.css";
import { useState } from "react";
import List from "./components/List";
import AddToDo from "./components/AddToDo";
function App() {
  const [todos, setTodos] = useState([]);

  function addToDo(todo) {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  return (
    <div className="App-header">
      <AddToDo addToDo={addToDo} />
      <List todos={todos} />
    </div>
  );
}

export default App;
