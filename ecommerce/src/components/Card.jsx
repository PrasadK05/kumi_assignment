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
    <Box w="140px" border={"1px solid red"}>
      <VStack>
        <Box width={"100%"} position="relative">
          <Image src={image} w="100px" h="100px" alt="error" m="auto" />
          <Button
            position={"absolute"}
            right="0px"
            bottom={"0px"}
            borderRadius="50%"
            onClick={handleClick}
          >
            {state ? "+" : "-"}
          </Button>
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Text display={prev == null ? "none" : "block"}>{prev}</Text>
          <Text>{price}</Text>
        </Box>
        <Text>{name}</Text>
        <Text>{weight}</Text>
      </VStack>
    </Box>
  );
}
