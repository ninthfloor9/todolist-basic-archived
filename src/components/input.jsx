import React, { useState } from "react";
import PropTypes from "prop-types";

const InputTodo = (props) => {
  const [todo, setTodo] = useState("");
  const handleTodo = (e) => setTodo(e.target.value);

  const addTodo = () => {
    props.setTodos((prev) => {
      const newTodos = [...prev, todo];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
    setTodo("");
  };

  return (
    <div>
      <input
        value={todo}
        onChange={handleTodo}
        placeholder="add your job plz"
      />
      <button onClick={addTodo}>add</button>
    </div>
  );
};

export default InputTodo;

InputTodo.propTypes = {
  setTodos: PropTypes.array.isRequired,
};
