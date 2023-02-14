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
          <Link
            to="produce"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
            activeStyle={{color:"red"}}
          >           
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
              <FaCarrot color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3" _activeLink={{color:"red"}}>
              Produce
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="pf" smooth={true} duration={1000} offset={170} spy={true} activeStyle={{color:"red"}}>
          
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
              <TbCandy color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Sweet
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="cfs" smooth={true} duration={1000} offset={-170} spy={true}>
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
              <GiCannedFish color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Canned
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="produce1"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <FaCarrot color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Produce
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="bakery"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <FaCookieBite color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Bakery
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="d&e" smooth={true} duration={1000} offset={-170} spy={true}>
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
              <BsFillEggFill color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Dairy
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="frozen"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <GiFrozenOrb color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Frozen
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="m&s" smooth={true} duration={1000} offset={-170} spy={true}>
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
              <GiRoastChicken color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Meat
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="bakery1"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <FaCookieBite color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Bakery
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="d&e1"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <BsFillEggFill color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Dairy
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="pf1" smooth={true} duration={1000} offset={-170} spy={true}>
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
              <TbCandy color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Sweet
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="cfs1"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <GiCannedFish color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Canned
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="produce2"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <FaCarrot color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Produce
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="bakery2"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <FaCookieBite color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Bakery
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="d&e2"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <BsFillEggFill color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Dairy
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="frozen1"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <GiFrozenOrb color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Frozen
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="m&s1"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <GiRoastChicken color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Meat
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="produce3"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <FaCarrot color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Produce
            </Text>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="bakery3"
            smooth={true}
            duration={1000}
            offset={-170}
            spy={true}
          >
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
              <FaCookieBite color="#B6BAC3" size={"24px"} />
            </Box>
            <Text fontSize={"12px"} color="#B6BAC3">
              Bakery
            </Text>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
