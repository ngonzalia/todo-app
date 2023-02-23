import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [
  {
    id: 1,
    title: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: 2,
    title: "Jog around the park 3x",
    completed: false,
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    title: "Read for 1 hour",
    completed: false,
  },
  {
    id: 5,
    title: "Pick up groceries",
    completed: false,
  },
  {
    id: 6,
    title: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title, completed) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: title.trim(),
        completed,
      },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todosNoCompleted = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;

      case "active":
        return todos.filter((todo) => !todo.completed);

      case "completed":
        return todos.filter((todo) => todo.completed);

      default:
        return todos;
    }
  };

  return (
    <div className="App transition-theme min-h-screen bg-[#e4e5f1] bg-mobile-light bg-[length:100%_200px] bg-top bg-no-repeat font-josefin dark:bg-[#161722] dark:bg-mobile-dark md:bg-desktop-light md:dark:bg-desktop-dark md:bg-[length:100%_300px]">
      <Header />
      <main>
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={filteredTodos(todos)}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          todosNoCompleted={todosNoCompleted}
          clearCompleted={clearCompleted}
        />
        <TodoFilter filter={filter} setFilter={setFilter} />
      </main>
      <footer className="transition-theme mt-12 pb-16 text-center text-sm text-[#9394a5]">
        Drag and drop to reorder list
      </footer>
    </div>
  );
}

export default App;
