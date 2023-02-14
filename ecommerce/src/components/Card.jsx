import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addcart, removeData } from "../redux/cart/cart.action";

export default function Card({ image, name, prev, price, weight, id }) {
  const [state, setState] = useState(true);
  const dispatch = useDispatch();

  let handleClick = () => {
    if (state) {
      dispatch(addcart({ image, name, prev, price, weight, id }));
      setState(false);
    } else {
      dispatch(removeData({ id }));
      setState(true);
    }
  };
  return (
    <Box w="140px">
      <VStack>
        <Box width={"100%"} position="relative">
          <Image src={image} w="100px" h="100px" alt="error" m="auto" />
          <Button
            w={"42px"}
            h={"42px"}
            position={"absolute"}
            right="0px"
            bottom={"0px"}
            borderRadius="50%"
            onClick={handleClick}
            bg="#40D589"
            fontSize={"20px"}
            color="#FFFFFF"
          >
            {state ? "+" : "-"}
          </Button>
        </Box>
        <Box
          w="100%"
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          textAlign="left"
          pl="10px"
        >
          <Text
            display={prev==null||undefined ? "none" : "block"}
            color={"#737D94"}
            fontSize="20px"
            fontWeight={"600"}
            as="del"
          >
            $ {prev}
          </Text>
          <Text color={"#100E3A"} fontSize="20px" fontWeight={"700"}>
            $ {price}
          </Text>
        </Box>
        <Text w="100%" color={"#100E3A"} textAlign="left" pl="10px">
          {name}
        </Text>
        <Text w="100%" color={"#B6BAC3"} textAlign="left" pl="10px">
          {weight}
        </Text>
      </VStack>
    </Box>
  );
}
