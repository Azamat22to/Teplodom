import React from "react";
import mainBack from "./Images/mainBack.png";
import Karousel from "./Images/carousel.png";
import Car from "./Images/carousel3.png";
import Prod from "./Images/carousel2.png";
import Category from "../components/Category";
import Products from "../components/Products";
import Brend from "../components/Brend";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Main() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-5"
        style={{ maxWidth: "1200px", height: "420px" }}
      >
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <img
            src={mainBack}
            alt="Product 1"
            className="slide-image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <img
            src={Karousel}
            alt="Product 2"
            className="slide-image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <img
            src={Prod}
            alt="Product 3"
            className="slide-image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <img
            src={Car}
            alt="Product 4"
            className="slide-image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>

      <Category />
      <Products />
      <Brend />
    </>
  );
}

export default Main;
