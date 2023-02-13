import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";

export default function Tab({ name, id }) {  
  return (
    <>
      <Box
        w="80%"
        h="42px"
        color={"#737D94"}
        m="auto"
        mb="10px"
        display="flex"
        alignItems={"center"}
        padding="10px 20px 10px 20px"
        borderRadius={"10px"}
      >
        <Link
          to={id}
          smooth={true}
          duration={1000}
          offset={-170}
          spy={true}
          activeStyle={{
            backgroundColor: "#5DA9E9",
            color: "#FFFFFF",
            width: "100%",
            height: "42px",
            borderRadius: "10px",
            padding: "10px 10px 10px 10px",
          }}
        >
          <Text fontFamily={"Mulish"} textAlign={"left"}>
            {name}
          </Text>
        </Link>
      </Box>
    </>
  );
}
