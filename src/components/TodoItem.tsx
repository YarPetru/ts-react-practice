import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      {todo.id} {todo.title}
      <input type="checkbox" name="status" checked={todo.completed} />
    </div>
  );
};

export default TodoItem;
