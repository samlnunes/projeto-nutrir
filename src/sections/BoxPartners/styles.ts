import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 10px;
  z-index: 9999;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper {
    transition-timing-function: linear;
  }
`;
