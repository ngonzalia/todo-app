import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";
import React from "react";

const TodoItem = React.forwardRef(
  ({ todo, toggleTodo, deleteTodo, ...props }, ref) => {
    const { id, title } = todo;

    return (
      <article
        {...props}
        ref={ref}
        className="flex items-center justify-between gap-4 border-b p-4"
      >
        <button
          onClick={() => toggleTodo(id)}
          className={`btn ${
            todo.completed ? "btn-completed" : "btn-no-completed"
          }`}
        >
          {todo.completed && <IconCheck />}
        </button>

        <p
          className={`todo-text ${
            todo.completed ? "todo-text-completed" : "todo-text-no-completed"
          }`}
        >
          {title}
        </p>
        <button onClick={() => deleteTodo(id)}>
          <IconCross
            fill="#484b6a"
            className="transition-theme dark:fill-[#777a92]"
          />
        </button>
      </article>
    );
  }
);

export default TodoItem;
