"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Mousewheel } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";

export default function LandingPage() {
  const myRef = useRef();
  const [state, setState] = useState([]);

  function starsHandler() {
    var number_of_star = 150;

    var random_number = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var createStars = function () {
      var star_rotation = "move_right;";
      for (var i = 0; i < number_of_star; i++) {
        let rot = star_rotation == "move_right;" ? "move_left;" : "move_right;";
        var star_top = random_number(
          0,
          document.documentElement.clientHeight - 100
        );
        var star_left = random_number(
          0,
          document.documentElement.clientWidth - 100
        );
        var star_radius = random_number(0, 4);
        var star_duration = random_number(6, 16);
        const selectedElement = document.getElementById("starContainer");
        selectedElement.innerHTML +=
          "<div class='star' style='top: " +
          star_top +
          "px; left: " +
          star_left +
          "px; width: " +
          star_radius +
          "px; height: " +
          star_radius +
          "px; " +
          "animation-name:" +
          star_rotation +
          "; animation-duration: " +
          star_duration +
          "s;'></div>";
      }
    };

    createStars();
  }

  useEffect(() => {
    if (window) {
      starsHandler();
    }
  }, []);

  return (
    <>
      <Swiper
        direction={"vertical"}
        modules={[Mousewheel]}
        mousewheel={{ enabled: true }}
        slidesPerView={1}
        className="mySwiper"
        ref={myRef}
      >
        <SwiperSlide className="introPage">
          <Page1 myRef={myRef} />
        </SwiperSlide>
        <SwiperSlide>
          <Page2 />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
