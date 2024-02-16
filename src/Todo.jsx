import React from "react";
import { AiOutlineEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
  editButton: `ml-2 text-blue-500 hover:text-blue-700`,
};

const Todo = ({ todo, toggleComplete, deleteTodo, handleEdit }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <div className={style.button}>
        <button onClick={() => deleteTodo(todo.id)}>
          <AiOutlineClose size={20} />
        </button>
        <button className={style.editButton} onClick={() => handleEdit(todo)}>
          <AiOutlineEdit size={20} />
        </button>
      </div>
    </li>
  );
};

export default Todo;
