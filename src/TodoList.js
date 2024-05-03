import { Heading } from "@chakra-ui/react";
import TodoCard from "./TodoCard";

export default function TodoList({ todoList, onToggle }) {
  return (
    <>
      {todoList.length === 0 && <Heading size="md">No todos available</Heading>}

      {todoList.map((todo) => (
        <TodoCard todo={todo} key={todo.id} onToggle={onToggle} />
      ))}
    </>
  );
}
