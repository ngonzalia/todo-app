import { useState } from "react";
import IconCheck from "./icons/IconCheck";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(!completed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (completed)
      if (!title.trim()) {
        return setTitle("");
      }

    createTodo(title, completed);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="transition-theme mx-4 mt-8 flex items-center rounded-md bg-white px-4 py-1 dark:bg-[#393a4c]"
    >
      <button
        type="button"
        onClick={handleClick}
        className={`btn ${
          completed ? "btn-completed" : "btn-no-completed"
        } transition-theme dark:bg-[#393a4c]`}
      >
        {completed && <IconCheck />}
      </button>
      <input
        type="text"
        name="todo"
        className="transition-theme flex-grow px-4 py-3 text-[#484b6a] outline-none focus-visible:bg-none dark:bg-[#393a4c] dark:text-[#e4e5f1]"
        placeholder="Create a new Todo..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoComplete="off"
        autoFocus
      />
    </form>
  );
};

export default TodoCreate;
