import { useState } from "react";

const AddToDo = ({ addToDo }) => {
  const [userInput, setUserInput] = useState("");

  function handleTodo(e) {
    e.preventDefault();
    addToDo(userInput);
    setUserInput("");
  }

  return (
    <form onSubmit={handleTodo}>
      <input
        placeholder="Todo goes here~"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <button>Submit</button>
    </form>
  );
};

export default AddToDo;
