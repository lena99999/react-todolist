import { Input, Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import CardLayout from "./CardLayout";

export default function AddTodoCard({ onAddTodo }) {
  const [text, setText] = useState("");

  function handleAdd(e) {
    e.preventDefault();

    if (!text) {
      return;
    }

    const newTodo = {
      userId: 2,
      id: crypto.randomUUID(),
      title: text,
      completed: false,
    };

    onAddTodo(newTodo);
    setText("");
  }

  return (
    <div className="new-todo">
      <CardLayout>
        <Checkbox
          size="lg"
          colorScheme="teal"
          defaultChecked
          isDisabled
          isInvalid
        ></Checkbox>
        <form onSubmit={handleAdd}>
          <Input
            value={text}
            size="lg"
            placeholder="Add todo..."
            focusBorderColor="teal.400"
            className="add-input"
            onChange={(e) => setText(e.target.value)}
          />
          {/* <Button
            colorScheme="teal"
            variant="solid"
            size="sm"
            className="add-button"
            onClick={handleAdd}
          >
            Add
          </Button> */}
        </form>
      </CardLayout>
    </div>
  );
}
