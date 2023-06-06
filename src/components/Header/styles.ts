import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  position: relative;

  img {
    height: 100%;
  }
`;

export const BoxCoins = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 4vw;
  gap: 5px;

  span {
    font-weight: 600;
    font-size: 20px;
  }
`;
