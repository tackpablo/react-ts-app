import { FormEvent, ReactNode, useRef } from "react";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
  children?: ReactNode;
};

const NewTodo = (props: NewTodoProps) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
