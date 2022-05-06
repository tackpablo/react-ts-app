import { ReactNode } from "react";
import Todo from "../models/todo";

type TodosProps = {
  items: Todo[];
  children?: ReactNode;
};

const Todos = (props: TodosProps) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
