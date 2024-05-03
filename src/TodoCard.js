import { Text, Checkbox } from "@chakra-ui/react";
import CardLayout from "./CardLayout";

export default function TodoCard({ todo, onToggle }) {
  return (
    <CardLayout>
      <Checkbox
        size="lg"
        colorScheme="teal"
        isChecked={todo.completed}
        isInvalid={!todo.completed}
        onChange={(e) => onToggle(e.target.checked, todo)}
      >
        <Text>{todo.title}</Text>
      </Checkbox>
    </CardLayout>
  );
}
