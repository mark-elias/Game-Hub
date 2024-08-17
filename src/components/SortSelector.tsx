import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by relavance
      </MenuButton>
      <MenuList>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item1</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
