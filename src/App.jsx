import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

// load todos from localStorage if they exist, if not, print the static array
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

// drag and drop behavior, reorder to-do list
const reorder = (todos, startIndex, endIndex) => {
  const todoList = [...todos];
  // array.splice(start, deleteCount, [items to add])
  const [removed] = todoList.splice(startIndex, 1);
  todoList.splice(endIndex, 0, removed);
  return todoList;
};

function App() {
  const [todos, setTodos] = useState(initialStateTodos);

  // update the localStorage every time the to-do list is modified
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // create to-do
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

  // change the status of the to-do
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // delete to-to
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // calculate the number of incomplete to-dos
  const todosNoCompleted = todos.filter((todo) => !todo.completed).length;

  // delete all completed
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  // filter to-dos
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

  // handle the drop when it ends
  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;
    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  return (
    <div className="App transition-theme min-h-screen bg-[#e4e5f1] bg-mobile-light bg-[length:100%_200px] bg-top bg-no-repeat font-josefin dark:bg-[#161722] dark:bg-mobile-dark md:bg-desktop-light md:bg-[length:100%_300px] md:dark:bg-desktop-dark">
      <Header />
      <main>
        <TodoCreate createTodo={createTodo} />
        {/* drag and drop */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filteredTodos(todos)}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            todosNoCompleted={todosNoCompleted}
            clearCompleted={clearCompleted}
          />
        </DragDropContext>
        <TodoFilter filter={filter} setFilter={setFilter} />
      </main>
      <footer className="transition-theme mt-12 pb-16 text-center text-sm text-[#9394a5]">
        Drag and drop to reorder list
      </footer>
    </div>
  );
}

export default App;
