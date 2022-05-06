import { ReactNode } from "react";
type TodosProps = {
  items: string[];
  children?: ReactNode;
};

const Todos = (props: TodosProps) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
