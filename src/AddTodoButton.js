import { IconButton, Flex, Box, Spacer } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function AddTodoButton({ onShowAddTodo }) {
  return (
    <Flex>
      <Spacer />
      <Box>
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Done"
          fontSize="20px"
          icon={<AddIcon />}
          onClick={() => onShowAddTodo((curr) => !curr)}
        />
      </Box>
    </Flex>
  );
}
