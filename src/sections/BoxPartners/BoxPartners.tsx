import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Partners } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";
import { PartnersProps } from "@/components/Partners/Partners";

const BoxPartners: React.FC = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("/api/partners")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPartners(data);
      });
  }, []);

  return (
    <Container>
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {partners?.map((item: PartnersProps, key) => (
          <SwiperSlide key={key}>
            <Partners cash={item.cash} logo={item.logo} name={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default BoxPartners;
