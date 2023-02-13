import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";

export default function Tab({ name, id }) {
  return (
    <>
      <Link to={id} smooth={true} duration={1000} offset={-80}>
        <Box
          w="80%"
          h="42px"
          color={"#737D94"}
          m="auto"
          mb="10px"
          textAlign={"left"}
          display="flex"
          alignItems={"center"}
          padding="10px 40px 10px 20px"
          borderRadius={"10px"}
          _active={{ bg: "#5DA9E9", color: "#FFFFFF" }}
        >
          <Text fontFamily={"Mulish"}>{name}</Text>
        </Box>
      </Link>
    </>
  );
}
