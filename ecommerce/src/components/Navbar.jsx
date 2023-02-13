import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

export function Navbar() {
  const { cart } = useSelector((store) => store.cart);
  return (
    <Box
      width={"100%"}
      position="sticky"
      top={"0px"}
      zIndex={100}
      h="102px"
      bg="#FFE475"
      display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
      justifyContent="space-between"
      alignItems={"center"}
      padding="25px 20px"
      mb="10px"
    >
      <Text fontFamily={"Prata"} fontSize="30px" fontWeight={"700"}>
        E-Commerce
      </Text>
      <Box
        width={"77px"}
        height="34px"
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        gap="5px"
        padding={"5px 20px"}
        bg="#FFFFFF"
        borderRadius={"100px"}
        boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
      >
        <AiOutlineShoppingCart />
        <Text fontFamily={"Mulish"}>{cart.length}</Text>
      </Box>
    </Box>
  );
}

export function MobileNavbar() {
  const { cart } = useSelector((store) => store.cart);
  return (
    <Box
      width={"100%"}
      h="42px"
      // bg="#FFE475"
      display={{ base: "flex", sm: "flex", md: "none", lg: "none" }}
      justifyContent="space-between"
      alignItems={"center"}
      padding="25px 20px"
    >
      <Text fontFamily={"Prata"} fontSize="30px" fontWeight={"700"}>
        E-Commerce
      </Text>
      <Box
        width={"77px"}
        height="34px"
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        gap="5px"
        padding={"5px 20px"}
        bg="#FFFFFF"
        borderRadius={"100px"}
        boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
      >
        <AiOutlineShoppingCart />
        <Text fontFamily={"Mulish"}>{cart.length}</Text>
      </Box>
    </Box>
  );
}
