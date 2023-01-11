import React, { FC, useEffect, useState } from "react";
import axios from "axios";

import TodoItem from "../TodoItem";
import AnyList from "../AnyList";
import { ITodo } from "../../types/types";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/users/1/todos"
      );
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AnyList
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
