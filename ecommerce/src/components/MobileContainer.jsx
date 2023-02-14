import { Box, Text } from "@chakra-ui/react";
import React from "react";
import IconSlider from "./IconSlider";
import MobileCategeory from "./MobileCategeory";

export default function MobileContainer() {
  return (
   
    <>
      <Box
        w="100%"
        padding={"10px 20px"}
        borderBottom="1px solid #EDEDED"
        position={"sticky"}
        top="50px"
        zIndex={100}
        mb="15px"
        bg="white"
      >
        <IconSlider />
      </Box>
      <Box w="100%">
        <MobileCategeory />
      </Box>
      </>
    
  );
}
