import React, { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#FF6B6B] to-[#4361EE]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between rounded-md`,
  input: `border p-2 w-full text-xl rounded-md`,
  button: `bg-blue-500 p-4 ml-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out`, // Button color changed to blue, hover effect added
  count: `text-center p-2`,
};

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // Read todos from Firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Handle editing logic
  const handleEdit = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
    setInput(todo.text); // Pre-populate input with todo text
  };

  // Save edited todo data
  const updateTodo = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await updateDoc(doc(db, "todos", currentTodo.id), {
      text: input,
    });
    setIsEditing(false);
    setCurrentTodo(null);
    setInput("");
  };

  // Update todo completion in Firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form
          onSubmit={isEditing ? updateTodo : createTodo}
          className={style.form}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder={isEditing ? "Edit Todo" : "Add Todo"}
          />
          {isEditing ? (
            <button className={style.button}>
              <AiOutlineEdit size={30} />
            </button>
          ) : (
            <button className={style.button}>
              <AiOutlinePlus size={30} />
            </button>
          )}
        </form>

        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
        {todos.filter((todo) => !todo.completed).length < 1 ? null : (
          <p className={style.count}>{`You have ${
            todos.filter((todo) => !todo.completed).length
          } incomplete todos`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
