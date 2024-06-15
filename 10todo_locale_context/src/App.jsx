import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context/index";
import "./App.css";
import TodoForm from "./compnents/TodoItem";
import TodoItem from "./compnents/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //here we use the property of setTodo where it gives us access to the all
    //prev todos
    // setTodos(todo) this will delete all the other prev todos
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    //this will add a new todo at the start with id:Date.now()
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((curr) => (curr.id === id ? todo : curr)));
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id == id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };

  //now we need locale storage to store the values and retrive them
  // thus we use useeffect to get as well as set the todos

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  //now we could have added the get functionality inside but that would create a mesh
  //as everytime we set an new todo, the getitem also re-runs
  //thus we use a separate todo for this

  useEffect(() => {
    //todos are actually arrays in form of json,
    //but setitem takes same key and value as string
    //thus stringify the json
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, updateTodo, addTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
