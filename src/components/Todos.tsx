import { ReactNode } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

type TodosProps = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
  children?: ReactNode;
};

const Todos = (props: TodosProps) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => props.onRemoveTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
