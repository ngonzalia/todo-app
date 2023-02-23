import React from "react";

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <section className="transition-theme mx-4 mt-8 flex items-center justify-center gap-4 rounded-md bg-white p-4 dark:bg-[#393a4c]">
      <button
        onClick={() => setFilter("all")}
        className={`filter-text ${
          filter === "all" ? "filter-text-active" : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`filter-text ${
          filter === "active" ? "filter-text-active" : ""
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`filter-text ${
          filter === "completed" ? "filter-text-active" : ""
        }`}
      >
        Completed
      </button>
    </section>
  );
};

export default TodoFilter;
