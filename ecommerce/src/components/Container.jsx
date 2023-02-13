import { Box, Text } from "@chakra-ui/react";
import React from "react";
import tabs from "../config/tabs";
import Tab from "./Tab";
import data1 from "../config/data1";
import Card from "./Card";

export default function Container() {
  return (
    <Box
      width={"100%"}
      h="87vh"
      display="flex"
      justifyContent={"space-between"}
      border="1px solid red"
    >
      <Box
        width={"20%"}
        border="1px solid blue"
        overflowY={"auto"}
        sx={{
          "&::-webkit-scrollbar": { width: "8px" },
          "&::-webkit-scrollbar-track": { width: "8px", bg: "#EDEDED" },
          "&::-webkit-scrollbar-thumb": {
            bg: "#5DA9E9",
            borderRadius: "4px",
            m: "auto",
          },
        }}
      >
        {tabs.map((el, i) => {
          return <Tab key={i} name={el.name} id={el.id} />;
        })}
      </Box>
      <Box width={"80%"} border="1px solid blue" padding={"0px 30px"}>
        <Box w="100%" border={"1px solid yellow"}>
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>{"Produce >"} </Text>
          <Box
            width={"auto"}
            display="grid"
            gridTemplateColumns={"repeat(12,1fr)"}
            gap="20px"
            border="1px solid blue"
            overflowX={"scroll"}
            whiteSpace="nowrap"
            sx={{"&::-webkit-scrollbar": { height:"10px" }}}
            padding={"10px 0px 0px 0px"}
            
          >
            {data1.map((el, i) => {
              return (
                <Card
                  key={el.id}
                  name={el.name}
                  prev={el.prev_price}
                  price={el.price}
                  image={el.image}
                  weight={el.weight}
                  id={el.id}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
