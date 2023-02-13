import { Box, Text } from "@chakra-ui/react";
import React from "react";
import tabs from "../config/tabs";
import Tab from "./Tab";
import data1 from "../config/data1";
import data2 from "../config/data2";
import data3 from "../config/data3";
import data4 from "../config/data4";
import data5 from "../config/data5";
import data6 from "../config/data6";
import data7 from "../config/data7";
import data8 from "../config/data8";
import data9 from "../config/data9";
import data10 from "../config/data10";
import data11 from "../config/data11";
import data12 from "../config/data12";
import data13 from "../config/data13";
import data14 from "../config/data14";
import data15 from "../config/data15";
import data16 from "../config/data16";
import data17 from "../config/data17";
import data18 from "../config/data18";
import data19 from "../config/data19";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import {  Navigation } from "swiper";

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
      <Box
        width={"80%"}
        border="1px solid blue"
        overflowY={"auto"}
        sx={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        <Box
          id="produce"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Produce >"}{" "}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data1.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>
        <Box
          name="pf"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Prepared foods >"}{" "}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data2.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>
        <Box
          id="cfs"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Canned foods & Soups >"}{" "}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data3.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="produce1"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Produce >"}{" "}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data4.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="bakery"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Bakery >"}{" "}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data5.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="d&e"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Dairy & Eggs >"}{" "}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data6.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="frozen"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Frozen >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data7.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="m&s"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Meat & Seafood >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data8.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="bakery1"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Bakery >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data9.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="d&e1"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Dairy & Eggs >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data10.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="pf1"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Prepared foods >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data11.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="cfs1"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Canned foods & Soups >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data12.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="produce2"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Produce >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data13.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="bakery2"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Bakery >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data14.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="d&e2"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Dairy & Eggs >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data15.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="frozen1"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Frozen >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data16.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="m&s1"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Meat & Seafood >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data17.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="produce3"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Produce >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data18.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

        <Box
          id="bakery3"
          w="100%"
          borderBottom={"1px solid #EDEDED"}
          padding={"0px 30px"}
          mb="30px"
        >
          <Text textAlign={"left"} fontFamily="Prata" fontSize={"30px"}>
            {"Bakery >"}
          </Text>
          <Box width={"100%"} padding={"20px 0 40px 0"}>
            <Swiper
              slidesPerView={7}
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
              {data19.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Card
                      key={el.id}
                      name={el.name}
                      prev={el.prev_price}
                      price={el.price}
                      image={el.image}
                      weight={el.weight}
                      id={el.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
