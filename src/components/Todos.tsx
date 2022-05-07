import { ReactNode } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type TodosProps = {
  items: Todo[];
  children?: ReactNode;
};

const Todos = (props: TodosProps) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
