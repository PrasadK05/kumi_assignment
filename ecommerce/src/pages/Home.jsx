import { Box } from "@chakra-ui/react";
import React from "react";
import Container from "../components/Container";
import MobileContainer from "../components/MobileContainer";
import { Navbar, MobileNavbar } from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Container/>
      <MobileContainer/>
    </>
  );
}
