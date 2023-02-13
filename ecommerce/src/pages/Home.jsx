import { Box } from "@chakra-ui/react";
import React from "react";
import Container from "../components/Container";
import { Navbar, MobileNavbar } from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Container/>
    </>
  );
}
