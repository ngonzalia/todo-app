import TodoItem from "./TodoItem";
import TodoComputed from "./TodoComputed";
import { Draggable, Droppable } from "@hello-pangea/dnd";

const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  todosNoCompleted,
  clearCompleted,
}) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvided) => (
        <section
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className="transition-theme mx-4 mt-8 flex flex-col rounded-md bg-white dark:bg-[#393a4c] sm:mx-auto sm:max-w-xl"
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(draggableProvided) => (
                <TodoItem
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.dragHandleProps}
                  {...draggableProvided.draggableProps}
                />
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}

          <TodoComputed
            key="computed"
            todos={todos}
            clearCompleted={clearCompleted}
            todosNoCompleted={todosNoCompleted}
          />
        </section>
      )}
    </Droppable>
  );
};

export default TodoList;
