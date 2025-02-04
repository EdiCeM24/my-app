import React, { useReducer, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const myTask = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
        },
      ];
    case "add":
      return state.AiFillDelete;   // I need to check here.
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
const initialState = [];

let num = [1, 2, 3, 4];
let d = num.filter((x) => x !== 2);
console.log(d);

const Task = () => {
  const [state, dispatch] = useReducer(myTask, initialState);

  const [todo, setTodo] = useState("");

  function handleTodo() {
    if (todo.trim() === "") return;
    dispatch({ type: "addTodo", payload: todo });
    setTodo("");
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleTodo();
    }
  }

  return (
    <div className="flex mt-60 items-center justify-evenly mb-[30%] gap-8">
      <div className="sm:grid sm:flex-col ml-32 lg:flex lg:items-center lg:ml-[5%]">
        <input
          type="text"
          className="mb-40 sm:-ml-[16%]  bg-slate-800 text-2xl text-white font-semibold rounded-md ml-16"
          name="text"
          onKeyDown={handleKeyPress}
          placeholder="Enter a task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleTodo}
          className="mb-40 flex items-center ml-4 gap-8
         bg-blue-500 px-6 py-3 hover:bg-blue-700 sm:mt-20 sm:ml-[10%]
         absolute rounded-md text-white font-semibold lg:mt-1 lg:ml-[35%]
         transition duration-150"
        >
          Add
        </button>
      </div>

      <ol>
        {state.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 text-yellow-200 text-lg font-semibold"
          >
            {todo.text}
            <button
              onClick={() => dispatch({ type: " remove", payload: todo.id })}
              className="flex flex-row items-center py-2 px-2"
            >
              <AiFillDelete className="icons flex items-center text-white text-2xl  relative right-[15%] mt-1" />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Task;
