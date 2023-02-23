const TodoComputed = ({ todosNoCompleted, clearCompleted }) => {
  return (
    <article className="transition-theme flex items-center justify-between gap-4 rounded-b-md bg-white p-4 dark:bg-[#393a4c]">
      <p className="text-xs font-bold text-[#9394a5]">
        {todosNoCompleted} items left
      </p>
      <button
        onClick={clearCompleted}
        className="transition-theme text-xs font-bold capitalize text-[#9394a5] transition-colors hover:text-[#161722] dark:hover:text-[#e4e5f1]"
      >
        Clear completed
      </button>
    </article>
  );
};

export default TodoComputed;
