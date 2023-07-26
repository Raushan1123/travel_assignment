import { Flex, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <Flex
      bg="gray.800"
      color="white"
      py={4}
      px={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontWeight="bold" fontSize="lg">
        Make Travel Easy
      </Text>
      <Box display="flex" justifyContent="space-between">
        <Text p="5px" onClick={() => Navigate("/")} cursor="pointer">
          Homepage
        </Text>
        <Text p="5px" onClick={() => Navigate("/details")} cursor="pointer">
          Travel Details
        </Text>
      </Box>
    </Flex>
  );
};

export default Navbar;