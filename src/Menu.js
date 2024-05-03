import { ButtonGroup, Button } from "@chakra-ui/react";
import { CheckIcon, EditIcon } from "@chakra-ui/icons";

export default function Menu({ showCompleted, onShowCompleted }) {
  return (
    <ButtonGroup spacing={4} direction="row" align="center">
      <Button
        colorScheme="teal"
        variant={showCompleted ? "outline" : "solid"}
        size="lg"
        onClick={() => onShowCompleted(false)}
      >
        <EditIcon className="icon" /> My Tasks
      </Button>
      <Button
        colorScheme="teal"
        variant={showCompleted ? "solid" : "outline"}
        size="lg"
        onClick={() => onShowCompleted(true)}
      >
        <CheckIcon className="icon" /> Archive
      </Button>
    </ButtonGroup>
  );
}
