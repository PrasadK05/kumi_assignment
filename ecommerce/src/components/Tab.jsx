import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import {Link} from "react-scroll"


export default function Tab({ name, id }) {
    // console.log(id);
  return (
    <>
      <Link
        to={id}
        smooth={true}
        duration={1000}
        offset={-80}
        spy={true}
        _active={{ bg: "#5DA9E9", color: "#FFFFFF" }}
      >
        <Box
          w="80%"
          h="42px"
          color={"#737D94"}
          m="auto"
          mb="10px"          
          display="flex"
          alignItems={"center"}
          padding="10px 40px 10px 20px"
          borderRadius={"10px"}          
        >
          <Text fontFamily={"Mulish"} textAlign={"left"}>{name}</Text>
        </Box>
      </Link>
    </>
  );
}
