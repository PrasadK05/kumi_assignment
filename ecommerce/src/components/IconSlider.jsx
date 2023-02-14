import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCarrot, FaCookieBite } from "react-icons/fa";
import { TbCandy } from "react-icons/tb";
import { GiCannedFish, GiFrozenOrb, GiRoastChicken } from "react-icons/gi";

import { BsFillEggFill } from "react-icons/bs";

import { Link } from "react-scroll";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";
export default function IconSlider() {
  return (
    <>
      <Swiper
        slidesPerView={5.5}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="1"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <FaCarrot color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>

          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="1"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Produce
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
            _active={{ color: "red" }}
          >
            <Link
              to="2"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <TbCandy color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="2"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Sweet
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="3"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <GiCannedFish color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="3"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Canned
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="4"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <FaCarrot color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="4"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Produce
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="5"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <FaCookieBite color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="5"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Bakery
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="6"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <BsFillEggFill color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="6"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Dairy
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="7"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <GiFrozenOrb color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="7"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Frozen
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="8"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <GiRoastChicken color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="8"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Meat
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="9"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <FaCookieBite color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="9"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Bakery
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="10"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <BsFillEggFill color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="10"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Dairy
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="11"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <TbCandy color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="11"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Sweet
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            //   border={"1px solid black"}
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="12"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <GiCannedFish color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="12"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Canned
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="13"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <FaCarrot color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="13"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Produce
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="14"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <FaCookieBite color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="14"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Bakery
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="15"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <BsFillEggFill color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="15"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Dairy
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="16"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <GiFrozenOrb color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="16"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Frozen
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="17"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <GiRoastChicken color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="17"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Meat
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="18"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <FaCarrot color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="18"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Produce
            </Link>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            w="48px"
            h="48px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            bg="#EDEDED"
            borderRadius={"5px"}
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.16)"
            mb="5px"
          >
            <Link
              to="19"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{
                backgroundColor: "#5DA9E9",
                color: "#FFFFFF",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                padding: "10px 10px 10px 12px",
              }}
            >
              <FaCookieBite color="#B6BAC3" size={"24px"} />
            </Link>
          </Box>
          <Text fontSize={"12px"} color="#B6BAC3">
            <Link
              to="19"
              smooth={true}
              duration={1000}
              offset={-300}
              spy={true}
              activeStyle={{ color: "#5DA9E9" }}
            >
              Bakery
            </Link>
          </Text>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
