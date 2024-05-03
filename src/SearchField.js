import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchField({ filterText, onSetFilterText }) {
  return (
    <div className="search-field">
      <InputGroup size="lg">
        <InputLeftAddon>
          <SearchIcon color="teal.500" />
        </InputLeftAddon>

        <Input
          type="text"
          value={filterText}
          focusBorderColor="teal.400"
          placeholder="Search todos..."
          onChange={(e) => onSetFilterText(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}
