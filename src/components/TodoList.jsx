import TodoItem from "./TodoItem";
import TodoComputed from "./TodoComputed";

const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  todosNoCompleted,
  clearCompleted,
}) => {
  return (
    <section className="transition-theme mx-4 mt-8 flex flex-col rounded-md bg-white dark:bg-[#393a4c]">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}

      <TodoComputed
        key="computed"
        todos={todos}
        clearCompleted={clearCompleted}
        todosNoCompleted={todosNoCompleted}
      />
    </section>
  );
};

export default TodoList;
