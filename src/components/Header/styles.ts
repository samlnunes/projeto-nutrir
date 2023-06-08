import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  position: relative;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;

  img {
    max-height: 40px;

    @media (max-width: 768px)  {
      max-height: 35px;
    }
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

export const Nav = styled.nav`
  position: absolute;
  left: 4vw;
  display: flex;
  gap: 30px;

  a {
    color: #ed2647;
    font-size: 18px;
    font-weight: 500;
  }
`;
